import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import {stylesLogin} from './loginStyle';

function Login() {
  return (
    <View style={stylesLogin.container}>
      <Text>Eu sou o login sasdad</Text>
      <Text>Testando</Text>
      <ImageBackground
        source={{uri: 'https://github.com/igor-capeletti.png'}}
        style={{
          width: 200,
          height: 200,
          borderColor: 'black',
        }}
      />
    </View>
  );
}

export default Login;
