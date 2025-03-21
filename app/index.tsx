import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput, Divider } from 'react-native-paper';
import { Link } from 'expo-router';

const TelaLogin = () => {
  const [emailUser, setEmail] = React.useState('')
  const [senhaUser, setSenha] = React.useState('')
  
  const fazerlogin = async (email : string, senha: string) => {
    if (email == '' || senha == ''){
      return {mensagem: "preencha todos os campos"}
    }

    let status = await fetch("http://localhost:5000/login", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'        
      },
      body: JSON.stringify({
        email: email,
        senha: senha
      })
    })
    .then(res => res.json())

    return status
  }

  const redirecionamento = async (email: string, senha: string) => {
    let status = await fazerlogin(email, senha)
    if (status.mensagem == "usuario logado!") {
      localStorage.setItem("email", emailUser)
      window.location.href = '/TelaHome'
    } else {
      alert(status.mensagem)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
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
      <Button style={styles.linkButton} onPress={async () => await redirecionamento(emailUser, senhaUser)}>
        <Text>Entrar</Text>
      </Button>
      <Link style={styles.link} href="/TelaCadastro">
        <Text>Fazer Cadastro</Text>
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
    color: 'white'
  }
})

export default TelaLogin