import React from 'react';
import { View, Image, Button, TextInput, Text } from 'react-native';
import { stylesLogin } from './loginStyle';

import * as Animatable from 'react-native-animatable'

function Login() {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  function authLogin() {
    /*Ideia para autenticação
    - Hook: useAuth
    - ter um estado 'logado' (importante ter um useEffect vazio para caso de re
      carregar o componente ter que fazer login novamente, ex botão voltar na próx tela) com encaminhamento aqui no login por rota
    - useAuth retorna verdadeiro ou não com o user e as áreas
      */
    console.log("Login: " + user);
    console.log("Senha: " + password);
  }


  return (
    <View style={stylesLogin.container}>

      <Animatable.View animation="fadeInLeft" delay={1000}>
        <Image
          source={require('../../assets/logo_app.png')}
          style={stylesLogin.logo}
        />
      </Animatable.View>

      <Animatable.View animation="fadeIn" delay={2000}>

        <Text>Login</Text>
        <TextInput
          style={stylesLogin.input}
          placeholder="Insira seu usuário"
          value={user}
          type="email"
          onChangeText={input => setUser(input)}
        />

        <Text>Senha</Text>
        <TextInput
          style={stylesLogin.input}
          placeholder="Insira sua senha"
          value={password}
          type="password"
          onChangeText={input => setPassword(input)}
          secureTextEntry={true}
        />


        <Button
          title="Efetuar Login"
          color="#156AE9"
          accessibilityLabel="Botão para efetuar o Login"
          onPress={() => authLogin()}
        />
        {
        //TODO: Por enquanto sem registrar!
        /* <Button
          title="Registre-se"
          color="#156AE9"
          accessibilityLabel="Botão para efetuar o cadastro de nova conta"
        /> */}

      </Animatable.View>
    </View >
  );
}

export default Login;
