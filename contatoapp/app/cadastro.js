import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  ActivityIndicator,
} from "react-native";

import { router } from "expo-router";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function cadastrar() {
    if (!email.trim() || !senha || !confirmarSenha) {
      Alert.alert(
        "Atenção",
        "Preencha todos os campos."
      );
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert(
        "Atenção",
        "As senhas não são iguais."
      );
      return;
    }

    if (senha.length < 6) {
      Alert.alert(
        "Atenção",
        "A senha deve ter pelo menos 6 caracteres."
      );
      return;
    }

    try {
      setCarregando(true);

      const resultado =
        await createUserWithEmailAndPassword(
          auth,
          email.trim(),
          senha
        );

      console.log(
        "Usuário criado:",
        resultado.user.email
      );

      Alert.alert(
        "Sucesso",
        "Conta criada com sucesso!",
        [
          {
            text: "OK",
            onPress: () =>
              router.replace("/contatos"),
          },
        ]
      );

    } catch (error) {
      console.log("ERRO CADASTRO:", error);
      console.log("CÓDIGO:", error.code);
      console.log("MENSAGEM:", error.message);

      let mensagem =
        "Não foi possível criar a conta.";

      if (
        error.code ===
        "auth/email-already-in-use"
      ) {
        mensagem =
          "Esse e-mail já possui uma conta.";
      }

      if (
        error.code ===
        "auth/invalid-email"
      ) {
        mensagem =
          "Digite um e-mail válido.";
      }

      if (
        error.code ===
        "auth/weak-password"
      ) {
        mensagem =
          "A senha é muito fraca.";
      }

      if (
        error.code ===
        "auth/operation-not-allowed"
      ) {
        mensagem =
          "E-mail e senha não estão ativados no Firebase.";
      }

      Alert.alert(
        "Erro no cadastro",
        mensagem
      );

    } finally {
      setCarregando(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <TouchableOpacity
          style={styles.voltar}
          onPress={() => router.back()}
        >
          <Text style={styles.voltarTexto}>
            ‹ Voltar
          </Text>
        </TouchableOpacity>

        <View style={styles.icon}>
          <Text style={styles.iconText}>
            👤
          </Text>
        </View>

        <Text style={styles.title}>
          Criar sua conta
        </Text>

        <Text style={styles.subtitle}>
          Cadastre-se para começar
        </Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          editable={!carregando}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          editable={!carregando}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          placeholderTextColor="#999"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry
          editable={!carregando}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={cadastrar}
          disabled={carregando}
        >
          {carregando ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>
              Criar conta
            </Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.replace("/")}
        >
          <Text style={styles.loginText}>
            Já possui uma conta?{" "}

            <Text style={styles.loginLink}>
              Entrar
            </Text>
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fbff",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  voltar: {
    position: "absolute",
    top: 20,
    left: 20,
  },

  voltarTexto: {
    color: "#3478f6",
    fontSize: 16,
  },

  icon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#3478f6",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
  },

  iconText: {
    fontSize: 35,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#222",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginBottom: 30,
  },

  input: {
    height: 52,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  button: {
    height: 52,
    backgroundColor: "#3478f6",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  loginText: {
    textAlign: "center",
    color: "#777",
  },

  loginLink: {
    color: "#3478f6",
    fontWeight: "bold",
  },
});
