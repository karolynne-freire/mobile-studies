import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

function LoginScreen({ navigation }) {

  return (
    <View style={styles.loginContainer}>

<View style={styles.avatar}>
  <Ionicons name="person-outline" size={75} color="#000" />
</View>

      <Text style={styles.loginTitle}>
        Login
      </Text>

      <TextInput
        style={styles.input}
      />


      <Text style={styles.loginTitle}>
        Senha
      </Text>

      <TextInput
        style={styles.input}
        secureTextEntry
      />


      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Contatos')}
      >
        <Text style={styles.loginButtonText}>
          LOGAR
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate('Usuario')}
      >
        <Text style={styles.registerButtonText}>
          CADASTRAR
        </Text>
      </TouchableOpacity>

    </View>
  );
}


function ContatosScreen({ navigation }) {

  return (
    <View style={styles.contactsContainer}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>
          Lista de Contatos
        </Text>


        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.addButton}>
            +
          </Text>
        </TouchableOpacity>

      </View>


      <TouchableOpacity
  style={styles.contact}
  onPress={() => navigation.navigate('AlterarContato')}
>

        <View style={styles.contactAvatar}>
          <Text style={styles.contactAvatarText}>
            <Ionicons name="person-outline" size={50} color="#f5eded" />
          </Text>
        </View>

        <View>
          <Text style={styles.contactName}>
            Marcos Andrade
          </Text>

          <Text style={styles.contactPhone}>
            81 988553424
          </Text>
        </View>

       </TouchableOpacity>


            <TouchableOpacity
  style={styles.contact}
  onPress={() => navigation.navigate('AlterarContato')}
>

        <View style={styles.contactAvatar}>
          <Text style={styles.contactAvatarText}>
              <Ionicons name="person-outline" size={50} color="#f5eded" />
          </Text>
        </View>

        <View>
          <Text style={styles.contactName}>
            Patrícia Tavares
          </Text>

          <Text style={styles.contactPhone}>
            81 998765332
          </Text>
        </View>

     </TouchableOpacity>


      <TouchableOpacity
  style={styles.contact}
  onPress={() => navigation.navigate('AlterarContato')}>

        <View style={styles.contactAvatar}>
          <Text style={styles.contactAvatarText}>
             <Ionicons name="person-outline" size={50} color="#f5eded" /> 
          </Text>
        </View>

        <View>
          <Text style={styles.contactName}>
            Rodrigo Antunes
          </Text>

          <Text style={styles.contactPhone}>
            81 987765525
          </Text>
        </View>

       </TouchableOpacity>

    </View>
  );
}



function CadastroScreen({ navigation }) {

  return (
    <View style={styles.cadastroContainer}>


      <View style={styles.cadastroHeader}>

        <TouchableOpacity
          onPress={() => navigation.navigate('Contatos')}
          style={styles.backButton}
        >
          <Text style={styles.backIcon}>
  ←
</Text>
  
        </TouchableOpacity>


        <Text style={styles.cadastroHeaderTitle}>
          Contato
        </Text>


        <View style={styles.headerSpace} />

      </View>


      <View style={styles.form}>

        <Text style={styles.label}>
          Nome
        </Text>

        <TextInput
          style={styles.cadastroInput}
        />


        <Text style={styles.label}>
          Email
        </Text>

        <TextInput
          style={styles.cadastroInput}
          keyboardType="email-address"
        />


        <Text style={styles.label}>
          Telefone
        </Text>

        <TextInput
          style={styles.cadastroInput}
          keyboardType="phone-pad"
        />


        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => navigation.navigate('Contatos')}
        >
          <Text style={styles.saveButtonText}>
            Salvar
          </Text>
        </TouchableOpacity>

      </View>
      

    </View>
  );
}

function AlterarContatoScreen({ navigation }) {
  return (
    <View style={styles.cadastroContainer}>

      <View style={styles.cadastroHeader}>

        <TouchableOpacity
          onPress={() => navigation.navigate('Contatos')}
          style={styles.backButton}
        >
          <Text style={styles.backIcon}>
            ←
          </Text>
        </TouchableOpacity>

        <Text style={styles.cadastroHeaderTitle}>
          Contato
        </Text>

        <View style={styles.headerSpace} />

      </View>

      <View style={styles.form}>

        <Text style={styles.label}>
          Nome
        </Text>

        <TextInput
          style={styles.cadastroInput}
          value="Marco Andrade"
        />

        <Text style={styles.label}>
          Email
        </Text>

        <TextInput
          style={styles.cadastroInput}
          value="mand@gmail.com"
          keyboardType="email-address"
        />

        <Text style={styles.label}>
          Telefone
        </Text>

        <TextInput
          style={styles.cadastroInput}
          value="81 988553424"
          keyboardType="phone-pad"
        />

        <TouchableOpacity
          style={styles.alterButton}
          onPress={() => navigation.navigate('Contatos')}
        >
          <Text style={styles.saveButtonText}>
            Alterar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => navigation.navigate('Contatos')}
        >
          <Text style={styles.saveButtonText}>
            Excluir
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}
function UsuarioScreen({ navigation }) {

  return (
    <View style={styles.cadastroContainer}>


      <View style={styles.cadastroHeader}>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.backButton}
        >
          <Text style={styles.backIcon}>
  ←
</Text>
  
        </TouchableOpacity>


        <Text style={styles.cadastroHeaderTitle}>
          Cadastro
        </Text>


        <View style={styles.headerSpace} />

      </View>


      <View style={styles.form}>

        <Text style={styles.label}>
          Nome
        </Text>

        <TextInput
          style={styles.cadastroInput}
        />
<Text style={styles.label}>
          CPF
        </Text>

        <TextInput
          style={styles.cadastroInput}
        />

        <Text style={styles.label}>
          Email
        </Text>

        <TextInput
          style={styles.cadastroInput}
          keyboardType="email-address"
        />


        <Text style={styles.label}>
         Senha
        </Text>

        <TextInput
          style={styles.cadastroInput}
          keyboardType="phone-pad"
        />


        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.saveButtonText}>
            Salvar
          </Text>
        </TouchableOpacity>

      </View>
      

    </View>
  );
}


export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />


        <Stack.Screen
          name="Contatos"
          component={ContatosScreen}
        />


        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
        />

              <Stack.Screen
          name="Usuario"
          component={UsuarioScreen}
        />

        <Stack.Screen
  name="AlterarContato"
  component={AlterarContatoScreen}
/>

      </Stack.Navigator>

    </NavigationContainer>
  );
}



const styles = StyleSheet.create({



  loginContainer: {
    flex: 1,
    backgroundColor: '#e9e0db',
    justifyContent: 'center',
    padding: 30,
  },


  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 25,
  },


  avatarText: {
    fontSize: 50,
  },


  loginTitle: {
    fontSize: 15,
    marginBottom: 15,
  },


  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 15,
    marginBottom: 15,
  },


  loginButton: {
    height: 50,
    backgroundColor: '#1976d2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
  },


  loginButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },


  registerButton: {
    height: 50,
    backgroundColor: '#fa0e0e',
    borderWidth: 1,
    borderColor: '#d21919',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 15,
  },


  registerButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },


  contactsContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },


  header: {
    height: 150,
    backgroundColor: '#3f6fe8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },


  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },


  addButton: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },


  contact: {
    height: 85,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 5,
    borderBottomColor: '#aaa',
  },


  contactAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3f8dcc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },


  contactAvatarText: {
    fontSize: 32,
  },


  contactName: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#333',
  },


  contactPhone: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#333',
  },




  cadastroContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },


  cadastroHeader: {
    height: 150,
    backgroundColor: '#3f6fe8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

backButton: {
  width: 45,
  height: 45,
  borderRadius: 22.5,
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
},

backIcon: {
  color: '#3f6df6',
  fontSize: 50,
  fontWeight: 'bold',
  marginTop: -15,

},

  cadastroHeaderTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },


  headerSpace: {
    width: 45,
  },


  form: {
    paddingHorizontal: 30,
    paddingTop: 90,
  },


  label: {
    fontSize: 21,
    color: '#333',
    marginBottom: 5,
  },


  cadastroInput: {
    height: 45,
    borderWidth: 1,
    borderColor: '#999',
    backgroundColor: '#fff',
    marginBottom: 5,
    paddingHorizontal: 10,
  },



  saveButton: {
    height: 50,
    backgroundColor: '#3f6fe8',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },


  saveButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  alterButton: {
  height: 50,
  backgroundColor: '#3f6fe8',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 15,
},

deleteButton: {
  height: 50,
  backgroundColor: '#ff2b23',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
},

});