import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import { router } from "expo-router";

import { signOut } from "firebase/auth";

import { auth } from "../firebase";

export default function Perfil() {

  async function sair() {
    try {
      await signOut(auth);

      router.replace("/");
    } catch (error) {
      console.log(error);

      Alert.alert(
        "Erro",
        "Não foi possível sair."
      );
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Perfil
      </Text>

      <Text style={styles.email}>
        {auth.currentUser?.email || ""}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={sair}
      >
        <Text style={styles.buttonText}>
          Sair da conta
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.voltar}
        onPress={() => router.back()}
      >
        <Text style={styles.voltarText}>
          Voltar
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor: "#f8fbff",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
  },

  email: {
    marginTop: 10,
    color: "#666",
  },

  button: {
    marginTop: 30,
    backgroundColor: "#e53935",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  voltar: {
    marginTop: 20,
  },

  voltarText: {
    color: "#3478f6",
  },
});
