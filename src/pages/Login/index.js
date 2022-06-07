import React from 'react';
import { View, Image, Button, TextInput, Text } from 'react-native';
import { stylesLogin } from './loginStyle';
import * as Animatable from 'react-native-animatable'
import Areas from '../Areas';

const Login = () => {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [logged, setLogged] = React.useState(false);

  React.useEffect(() => {
    setUser("");
    setPassword("");
    setLogged(false);
  }, []);

  function authLogin() {
    /*Ideia para autenticação
    - Hook: useAuth
    - useAuth retorna verdadeiro ou não com o user e as áreas
      */
    console.log("Login: " + user);
    console.log("Senha: " + password);
  }


  return (
    <>
      {logged == false ?
        <View style={stylesLogin.container} >
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

        :
        <Areas />
      }
    </>
  );
}

export default Login;
