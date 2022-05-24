import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import api from '../../services/api';


function Login() {
  const [users, setUsers] = useState([]);
  const ABACATE;

  useEffect(() => {
    async function getUsers() {
      try {
        const { data } = await api.get("/employees");
        console.log(data);
        setUsers(data);
      }
      catch {
        alert("Erro ao realizar get");
      }
    }
    getUsers();
  }, []);

  return (
    <Text>Eu sou o login</Text>
  );
}

export default Login;
