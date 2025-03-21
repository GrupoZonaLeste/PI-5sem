import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput, Divider } from 'react-native-paper';
import { Link } from 'expo-router';

const TelaLogin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <TextInput
        style={styles.spacing}
        mode="outlined"
        label="Email" tvParallaxProperties={undefined} onTextInput={undefined}
      />
      <TextInput
        style={styles.spacing}
        mode="outlined"
        label="Senha" tvParallaxProperties={undefined} onTextInput={undefined}      
      />
      <Link style={styles.linkButton} href="/TelaHome">
        <Text>Entrar</Text>
      </Link>
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