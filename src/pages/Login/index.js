import React from 'react';
import {Container, Form} from 'react-bootstrap';
import {View, Image} from 'react-native';
import {stylesLogin} from './loginStyle';

function Login() {
  return (
    <View style={stylesLogin.container}>
      {
        <Image
          source={require('../../assets/logo_app.png')}
          style={stylesLogin.logo}
        />
      }
    </View>
  );
}

export default Login;
