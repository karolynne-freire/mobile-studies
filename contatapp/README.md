# 📱 Aplicativo de Lista de Contatos

Aplicativo mobile desenvolvido em **React Native** com **Expo**, criado para realizar login, cadastro de usuários e gerenciamento de contatos.

O projeto possui uma interface simples e intuitiva, permitindo navegar entre as telas de login, lista de contatos, cadastro, alteração e exclusão de contatos.

## 🚀 Funcionalidades

* 🔐 Tela de Login
* 👤 Cadastro de usuário
* 📋 Lista de contatos
* ➕ Cadastro de novos contatos
* ✏️ Alteração de contatos
* 🗑️ Exclusão de contatos
* 📱 Interface adaptada para dispositivos móveis
* 🔄 Navegação entre telas utilizando React Navigation

## 🛠️ Tecnologias utilizadas

* **React Native**
* **Expo**
* **React Navigation**
* **React Native Screens**
* **React Native Safe Area Context**
* **@expo/vector-icons**
* **JavaScript**

## 📂 Telas do aplicativo

### 🔐 Login

Permite que o usuário informe seu login e senha.

Também possui dois botões:

* **Logar** → direciona para a lista de contatos.
* **Cadastrar** → direciona para o cadastro de usuário.

### 📋 Lista de Contatos

Exibe os contatos cadastrados no aplicativo.

Cada contato apresenta:

* Nome
* Número de telefone
* Ícone de usuário

Ao tocar em um contato, o usuário é direcionado para a tela de alteração.

O botão **+** permite cadastrar um novo contato.

### ➕ Cadastro de Contato

Permite informar:

* Nome
* Email
* Telefone

Após clicar em **Salvar**, o usuário retorna para a lista de contatos.

### ✏️ Alteração de Contato

Permite visualizar e alterar os dados de um contato.

Possui as opções:

* **Alterar**
* **Excluir**

Após realizar uma das ações, o usuário retorna para a lista de contatos.

### 👤 Cadastro de Usuário

Permite cadastrar um novo usuário através dos campos:

* Nome
* CPF
* Email
* Senha

Após clicar em **Salvar**, o usuário retorna para a tela de Login.

## 📦 Instalação

Primeiramente, clone o projeto:

```bash
git clone https://github.com/karolynne-freire/mobile-studies.git
```

Entre na pasta do projeto:

```bash
cd mobile-studies/contatapp
```

Instale as dependências:

```bash
npm install
```

Caso esteja utilizando Expo, execute:

```bash
npx expo start
```

Depois, é possível executar o aplicativo utilizando:

* Expo Go em um celular;
* Emulador Android;
* Simulador iOS;
* Navegador, quando compatível.


## ⚠️ Observação

Atualmente, os dados dos usuários e contatos são **estáticos** e não estão conectados a um banco de dados ou API.

As ações de **Salvar, Alterar e Excluir** apenas realizam a navegação entre as telas.

Como próximos passos, o projeto pode ser aprimorado com:

* Persistência dos contatos;
* Banco de dados;
* API para gerenciamento dos usuários;
* Autenticação real;
* Validação dos campos;
* Máscaras para CPF e telefone;
* Mensagens de confirmação;
* Armazenamento local com AsyncStorage.

## 👨‍💻 Projeto

Atividade desenvolvida para a disciplina de **Dispositivos Móveis** do curso de **ADS — IFPE**.
