import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TelaHome = () => {
  const [datauser, setDataUser] = React.useState(Object)

  React.useEffect(() => {
    let data = async () => {
      let response = await fetch(`http://localhost:5000/user/${localStorage.getItem("email")}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json'
        },
      }).then(res => res.json())
      setDataUser(response.userdata)
      console.log(datauser)
    } 
    
    data()
  }, [])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.titulo}>Bem-Vindo</Text>
      
      <View style={styles.container}>
        <Text style={styles.infoLabel}>Nome</Text>
        <Text style={styles.infoText}>{datauser.nome}</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.infoLabel}>Email</Text>
        <Text style={styles.infoText}>{datauser.email}</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.infoLabel}>Senha</Text>
        <Text style={styles.infoText}>{datauser.senha}</Text>
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
    gap: 10
  },
  infoLabel: {
    flex: 0.25,
    fontSize: 18,
  },
  infoText: {
    flex: 0.45,
    fontSize: 18,
    textDecorationLine: 'underline',
    textAlign: 'center',
  }
})


export default TelaHome