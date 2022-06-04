import React from 'react';
import {View, Image, Button, TextInput, useEffect} from 'react-native';
import {stylesLogin} from './loginStyle';

function Login() {
  const [user, onChangeUser] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  React.useEffect(() => {
    console.log(user);
  }, [user]);

  React.useEffect(() => {
    console.log(password);
  }, [password]);

  function onChangeLogin() {
    onChangeUser('Alterei o Login');
  }

  function onChangeSenha() {
    onChangePassword('Alterei a senha');
  }

  return (
    <View style={stylesLogin.container}>
      <View>
        <Image
          source={require('../../assets/logo_app.png')}
          style={stylesLogin.logo}
        />
      </View>
      <View>
        <TextInput
          style={stylesLogin.input}
          onChange={onChangeLogin}
          placeholder="Insira seu usuário"
        />
        <TextInput
          style={stylesLogin.input}
          onChangeText={onChangeSenha}
          placeholder="Insira sua senha"
        />
        <Button
          title="Efetuar Login"
          color="#156AE9"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
}

export default Login;
