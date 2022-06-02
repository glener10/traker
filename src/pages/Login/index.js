import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import {View, Image} from 'react-native';
import {stylesLogin} from './loginStyle';

function Login() {
  return (
    <View style={stylesLogin.container}>
      <Container>
        {<Image source={require('../../assets/logo_app.png')} />}
      </Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Usuário</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Logar
        </Button>
      </Form>
    </View>
  );
}

export default Login;
