import React, { useEffect, useState } from 'react';
import { ImageBackground , StyleSheet, View, Text } from 'react-native';
import api from '../../services/api';


function Login() {
  /*const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const { data } = await api.get("/employees");
        console.log(data);
        setUsers(data);
      }
      catch {
        alert("Erro ao realizar get");
        console.log("Alô");
      }
    }
    getUsers();
  }, []);
  */

  return (
    <View style={styles.container}>
      <Text>Eu sou o login sasdad</Text>
      <Text>Testando</Text>
      <ImageBackground  
        source={{uri: 'https://github.com/igor-capeletti.png'}} 
        style={{width: 400, height: 400}}  
      />
    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default Login;
