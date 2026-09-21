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
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function entrar() {
    if (!email.trim() || !senha) {
      Alert.alert(
        "Atenção",
        "Preencha e-mail e senha."
      );
      return;
    }

    try {
      setCarregando(true);

      const resultado =
        await signInWithEmailAndPassword(
          auth,
          email.trim(),
          senha
        );

      console.log(
        "Login realizado:",
        resultado.user.email
      );

      router.replace("/contatos");

    } catch (error) {
      console.log("ERRO LOGIN:", error);
      console.log("CÓDIGO:", error.code);
      console.log("MENSAGEM:", error.message);

      let mensagem =
        "Não foi possível realizar o login.";

      if (
        error.code === "auth/invalid-credential"
      ) {
        mensagem = "E-mail ou senha incorretos.";
      }

      if (
        error.code === "auth/user-not-found"
      ) {
        mensagem = "Usuário não encontrado.";
      }

      if (
        error.code === "auth/wrong-password"
      ) {
        mensagem = "Senha incorreta.";
      }

      if (
        error.code === "auth/invalid-email"
      ) {
        mensagem = "Digite um e-mail válido.";
      }

      if (
        error.code === "auth/too-many-requests"
      ) {
        mensagem =
          "Muitas tentativas. Tente novamente mais tarde.";
      }

      Alert.alert(
        "Erro no login",
        mensagem
      );

    } finally {
      setCarregando(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <View style={styles.icon}>
          <Text style={styles.iconText}>
            👤
          </Text>
        </View>

        <Text style={styles.title}>
          Bem-vindo de volta!
        </Text>

        <Text style={styles.subtitle}>
          Faça login para acessar seus contatos
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

        <TouchableOpacity
          style={styles.button}
          onPress={entrar}
          disabled={carregando}
        >
          {carregando ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>
              Entrar
            </Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/cadastro")}
        >
          <Text style={styles.registerText}>
            Não tem uma conta?{" "}

            <Text style={styles.registerLink}>
              Cadastre-se
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
    fontSize: 15,
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

  registerText: {
    textAlign: "center",
    color: "#777",
  },

  registerLink: {
    color: "#3478f6",
    fontWeight: "bold",
  },
});

