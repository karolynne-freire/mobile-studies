import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";

export default function EditarContato() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Editar contato
      </Text>

      <Text style={styles.text}>
        Tela de edição do contato
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>
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
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
  },

  text: {
    marginTop: 15,
    color: "#666",
  },

  button: {
    marginTop: 30,
    backgroundColor: "#3478f6",
    padding: 15,
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
