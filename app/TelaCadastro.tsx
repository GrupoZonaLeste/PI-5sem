import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput, Divider } from 'react-native-paper';
import { Link } from 'expo-router';

const TelaCadastro = () => {
  const [nomeUser, setNome] = React.useState('')
  const [emailUser, setEmail] = React.useState('')
  const [senhaUser, setSenha] = React.useState('')

  const fazerCadastro = async (nome : string, email : string, senha: string) => {
    if (nome == '' || email == '' || senha == ''){
      return {mensagem: "preencha todos os campos"}
    }

    let status = await fetch("http://localhost:5000/cadastro", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'        
      },
      body: JSON.stringify({
        nome: nome,
        email: email,
        senha: senha
      })
    })
    .then(res => res.json())

    return status
  }

  const redirecionamento = async (nome: string, email: string, senha: string) => {
    let status = await fazerCadastro(nome, email, senha)
    if (status.mensagem == "usuario cadastrado") {
      window.location.href = '/'
    } else {
      alert(status.mensagem)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>
      <TextInput
        style={styles.spacing}
        mode="outlined"
        label="Nome" tvParallaxProperties={undefined} onTextInput={undefined}
        onChangeText={text => setNome(text)}      
        />
      <TextInput
        style={styles.spacing}
        mode="outlined"
        label="Email" tvParallaxProperties={undefined} onTextInput={undefined}      
        onChangeText={text => setEmail(text)}      
        />
      <TextInput
        style={styles.spacing}
        mode="outlined"
        label="Senha" tvParallaxProperties={undefined} onTextInput={undefined}      
        onChangeText={text => setSenha(text)}      
      />
      <Button style={styles.linkButton} onPress={async () => await redirecionamento(nomeUser, emailUser, senhaUser)}>
        <Text>Cadastrar</Text>
      </Button>
      <Link style={styles.link} href="/">
        <Text>Fazer Login</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  spacing: {
    marginVertical: 5
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  link: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 0.3,
    textTransform: 'uppercase',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginVertical: 5,
    minHeight: 40,
  },
  linkButton: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 0.3,
    textTransform: 'uppercase',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginVertical: 5,
    minHeight: 40,
    borderRadius: 4,
    backgroundColor: 'black',
    color: 'white',
  },
})

export default TelaCadastro