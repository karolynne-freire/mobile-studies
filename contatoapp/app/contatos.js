import React, { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
  Alert,
} from "react-native";

import { router } from "expo-router";

import { signOut } from "firebase/auth";

import { auth } from "../firebase";

const contatosIniciais = [
  {
    id: "1",
    nome: "João Silva",
    telefone: "(81) 99999-1111",
    cidade: "Recife - PE",
    anotacao: "Amigo da faculdade",
  },
  {
    id: "2",
    nome: "Maria Costa",
    telefone: "(81) 98888-2222",
    cidade: "Carpina - PE",
    anotacao: "Cliente",
  },
  {
    id: "3",
    nome: "Pedro Almeida",
    telefone: "(81) 97777-3333",
    cidade: "Olinda - PE",
    anotacao: "Contato profissional",
  },
];

export default function Contatos() {
  const [contatos, setContatos] =
    useState(contatosIniciais);

  const [busca, setBusca] = useState("");

  const contatosFiltrados =
    contatos.filter((contato) =>
      contato.nome
        .toLowerCase()
        .includes(busca.toLowerCase())
    );

  async function sair() {
    try {
      await signOut(auth);

      router.replace("/");
    } catch (error) {
      console.log(error);

      Alert.alert(
        "Erro",
        "Não foi possível sair da conta."
      );
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <View>
          <Text style={styles.headerTitle}>
            Meus Contatos
          </Text>

          <Text style={styles.headerSubtitle}>
            {contatos.length} contatos
          </Text>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() =>
            router.push("/novo-contato")
          }
        >
          <Text style={styles.addText}>
            +
          </Text>
        </TouchableOpacity>

      </View>

      <View style={styles.searchContainer}>

        <Text style={styles.searchIcon}>
          🔍
        </Text>

        <TextInput
          style={styles.search}
          placeholder="Buscar contato..."
          placeholderTextColor="#999"
          value={busca}
          onChangeText={setBusca}
        />

      </View>

      <FlatList
        data={contatosFiltrados}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.empty}>

            <Text style={styles.emptyIcon}>
              👥
            </Text>

            <Text style={styles.emptyTitle}>
              Nenhum contato encontrado
            </Text>

          </View>
        }
        renderItem={({ item }) => (

          <TouchableOpacity
            style={styles.contact}
            onPress={() =>
              router.push({
                pathname: "/detalhes",
                params: {
                  id: item.id,
                },
              })
            }
          >

            <View style={styles.avatar}>

              <Text style={styles.avatarText}>
                {item.nome
                  .charAt(0)
                  .toUpperCase()}
              </Text>

            </View>

            <View style={styles.info}>

              <Text style={styles.name}>
                {item.nome}
              </Text>

              <Text style={styles.phone}>
                📞 {item.telefone}
              </Text>

              <Text style={styles.city}>
                📍 {item.cidade}
              </Text>

            </View>

            <Text style={styles.arrow}>
              ›
            </Text>

          </TouchableOpacity>
        )}
      />

      <View style={styles.bottom}>

        <TouchableOpacity
          style={styles.bottomItem}
        >
          <Text style={styles.bottomIcon}>
            👥
          </Text>

          <Text style={styles.bottomActive}>
            Contatos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomItem}
          onPress={() =>
            router.push("/perfil")
          }
        >
          <Text style={styles.bottomIcon}>
            👤
          </Text>

          <Text style={styles.bottomText}>
            Perfil
          </Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    backgroundColor: "#3478f6",
    paddingHorizontal: 20,
    paddingVertical: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  headerSubtitle: {
    color: "#dbe7ff",
    marginTop: 3,
  },

  addButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  addText: {
    color: "#3478f6",
    fontSize: 28,
  },

  searchContainer: {
    margin: 15,
    height: 48,
    backgroundColor: "#f1f3f5",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },

  searchIcon: {
    fontSize: 17,
  },

  search: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
  },

  list: {
    paddingHorizontal: 15,
  },

  contact: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#e8f0ff",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#3478f6",
    fontSize: 18,
    fontWeight: "bold",
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },

  phone: {
    color: "#666",
    marginTop: 4,
    fontSize: 13,
  },

  city: {
    color: "#999",
    marginTop: 3,
    fontSize: 12,
  },

  arrow: {
    fontSize: 28,
    color: "#999",
  },

  empty: {
    alignItems: "center",
    marginTop: 80,
  },

  emptyIcon: {
    fontSize: 50,
  },

  emptyTitle: {
    marginTop: 15,
    color: "#777",
    fontSize: 16,
  },

  bottom: {
    height: 65,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  bottomItem: {
    alignItems: "center",
  },

  bottomIcon: {
    fontSize: 20,
  },

  bottomText: {
    fontSize: 11,
    color: "#777",
  },

  bottomActive: {
    fontSize: 11,
    color: "#3478f6",
    fontWeight: "bold",
  },
});
