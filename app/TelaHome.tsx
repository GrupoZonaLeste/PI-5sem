import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TelaHome = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.titulo}>Bem-Vindo</Text>
      
      <View style={styles.container}>
        <Text style={styles.infoLabel}>Nome</Text>
        <Text style={styles.infoText}>EXEMPLO</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.infoLabel}>Email</Text>
        <Text style={styles.infoText}>EXEMPLO</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.infoLabel}>Senha</Text>
        <Text style={styles.infoText}>EXEMPLO</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  infoLabel: {
    flex: 0.25,
    fontSize: 18,
  },
  infoText: {
    flex: 0.45,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
  }
})


export default TelaHome