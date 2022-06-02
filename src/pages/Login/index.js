import React from 'react';
//TODO: Importação do Button é em react-native mas outras props vem do react-bootstrap
import { View, Image } from 'react-native';
import { stylesLogin } from './loginStyle';

function Login() {
  return (
    <View style={stylesLogin.container}>
      <View>
        <Image
          source={require('../../assets/logo_app.png')}
          style={stylesLogin.logo}
        />

      </View>

      <View>
        <Button title="EU SOU UM BOTÃO"></Button>
      </View>
    </View>
  );
}

export default Login;
