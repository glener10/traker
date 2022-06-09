import React from 'react';
import { View, Image, Button, TextInput, Text } from 'react-native';
import { stylesLogin } from './loginStyle';
import * as Animatable from 'react-native-animatable';
import Areas from '../Areas';
import useDb from '../../hooks/useDb';

const Login = () => {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [logged, setLogged] = React.useState(false);
  const db = useDb();

  const [areas, setAreas] = React.useState([]);
  const [userLogged, setUserLogged] = React.useState([]);

  React.useEffect(() => {
    setUser('');
    setPassword('');
    setLogged(false);
  }, []);

  async function authLogin() {
    if (!user || !password) {
      alert('Por favor, insira os dados.');
    } else {
      //TODO: Criar state para user e areas que set
      //TODO: Verificar se existe cliente com este user e senha
      //TODO: set state para useLogged e areas estaticamente
      setUserLogged(db.users[0]);
      setAreas(db.areas);
      setLogged(true);
    }
  }

  return (
    <>
      {logged == false ? (
        <View style={stylesLogin.container}>
          <Animatable.View animation="fadeInLeft" delay={500}>
            <Image
              source={require('../../assets/logo_app.png')}
              style={stylesLogin.logo}
            />
          </Animatable.View>

          <Animatable.View
            style={stylesLogin.form}
            animation="fadeIn"
            delay={1000}>
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
          </Animatable.View>
          <Animatable.View
            style={stylesLogin.inputButton}
            animation="fadeIn"
            delay={1000}>
            <Button
              title="Efetuar Login"
              color="#156AE9"
              accessibilityLabel="Botão para efetuar o Login"
              onPress={async () => await authLogin()}
            />
            {
              //TODO: Por enquanto sem registrar!
              /* <Button
          title="Registre-se"
          color="#156AE9"
          accessibilityLabel="Botão para efetuar o cadastro de nova conta"
            /> */
            }
          </Animatable.View>
        </View>
      ) : (
        <Areas props={{ userLogged, areas }} />
      )}
    </>
  );
};

export default Login;
