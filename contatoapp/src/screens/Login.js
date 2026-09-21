import { useState } from 'react';

import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../services/firebaseConfig';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [carregando, setCarregando] = useState(false);

async function realizarLogin() {
  if (!email.trim() || !senha) {
    Alert.alert(
      'Atenção',
      'Preencha e-mail e senha.'
    );
    return;
  }

  try {
    setCarregando(true);

    console.log('Tentando fazer login...');
    console.log('E-mail:', email.trim());

    const resultado = await signInWithEmailAndPassword(
      auth,
      email.trim(),
      senha
    );

    console.log(
      'LOGIN REALIZADO:',
      resultado.user.email
    );

    // Login deu certo → substitui a tela atual
    navigation.replace('ListaContatos');

  } catch (error) {
    console.log('ERRO LOGIN:', error);
    console.log('CÓDIGO:', error.code);
    console.log('MENSAGEM:', error.message);

    let mensagem = 'Não foi possível realizar o login.';

    switch (error.code) {
      case 'auth/invalid-credential':
        mensagem = 'E-mail ou senha incorretos.';
        break;

      case 'auth/user-not-found':
        mensagem = 'Usuário não encontrado.';
        break;

      case 'auth/wrong-password':
        mensagem = 'Senha incorreta.';
        break;

      case 'auth/invalid-email':
        mensagem = 'Digite um e-mail válido.';
        break;

      case 'auth/network-request-failed':
        mensagem = 'Erro de conexão com o Firebase.';
        break;

      case 'auth/too-many-requests':
        mensagem = 'Muitas tentativas. Tente novamente mais tarde.';
        break;
    }

    Alert.alert('Erro no login', mensagem);

  } finally {
    setCarregando(false);
  }
}



  function irParaCadastro() {
    navigation.navigate('Cadastro');
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        {/* Logo */}
        <View style={styles.logoCircle}>
          <MaterialCommunityIcons
            name="account"
            size={40}
            color="#fff"
          />
        </View>

        <Text style={styles.titulo}>
          Bem-vindo de volta!
        </Text>

        <Text style={styles.subtitulo}>
          Faça login para acessar seus contatos.
        </Text>

      </View>

      <View style={styles.form}>

        {/* E-mail */}
        <View style={styles.inputContainer}>

          <MaterialCommunityIcons
            name="email-outline"
            size={20}
            color="#888"
            style={styles.icon}
          />

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
            underlineColorAndroid="transparent"
          />

        </View>

        {/* Senha */}
        <View style={styles.inputContainer}>

          <MaterialCommunityIcons
            name="lock-outline"
            size={20}
            color="#888"
            style={styles.icon}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#999"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={!mostrarSenha}
            editable={!carregando}
            underlineColorAndroid="transparent"
          />

          <TouchableOpacity
            onPress={() =>
              setMostrarSenha(!mostrarSenha)
            }
            disabled={carregando}
          >

            <MaterialCommunityIcons
              name={
                mostrarSenha
                  ? 'eye-outline'
                  : 'eye-off-outline'
              }
              size={20}
              color="#888"
            />

          </TouchableOpacity>

        </View>

        {/* Entrar */}
        <TouchableOpacity
          style={[
            styles.botaoPrimario,
            carregando && styles.botaoDesabilitado,
          ]}
          onPress={realizarLogin}
          disabled={carregando}
        >

          {carregando ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.textoBotao}>
              Entrar
            </Text>
          )}

        </TouchableOpacity>

        {/* Esqueci a senha */}
        <TouchableOpacity
          style={styles.botaoSecundario}
          disabled={carregando}
        >

          <Text style={styles.textoLink}>
            Esqueceu sua senha?
          </Text>

        </TouchableOpacity>

        {/* Cadastro */}
        <View style={styles.rodapeRegistro}>

          <Text style={styles.textoNormal}>
            Não tem uma conta?{' '}
          </Text>

          <TouchableOpacity
            onPress={irParaCadastro}
            disabled={carregando}
          >

            <Text style={styles.textoAzul}>
              Cadastre-se
            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',  
  },

  header: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },

  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#90c0ec',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  titulo: {
    fontSize:25,
    fontWeight: 'bold',
    color: '#333',
  },

  subtitulo: {
    fontSize: 20,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },

  form: {
    paddingHorizontal: 30,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 5,
    marginBottom: 25,
  },

  icon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },

  botaoPrimario: {
    backgroundColor: '#90c0ec',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    minHeight: 52,
  },

  botaoDesabilitado: {
    opacity: 0.7,
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  botaoSecundario: {
    alignItems: 'center',
    marginTop: 15,
  },

  textoLink: {
    color: '#90c0ec',
    fontSize: 20,
    fontWeight: '500',
  },

  rodapeRegistro: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },

  textoNormal: {
    color: '#666',
    fontSize: 20,
  },

  textoAzul: {
    color: '#90c0ec',
    fontSize: 20,
    fontWeight: 'bold',
  },

});
