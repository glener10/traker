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

  async function getUser() {
    var control = false;
    db.users.map((value, index) => {
      if (value.username == user && value.password == password) {
        setUserLogged(value);
        control = true;
      }
    });
    return control;
  }

  async function getAreas(arrayAreas) {
    var control = false;
    db.areas.map((value, index) => {
      console.log(value);
    });

    return control;
  }

  async function authLogin() {
    if (!user || !password) {
      alert('Por favor, insira os dados.');
    } else {
      const control = await getUser();
      if (control) {
        //TODO: Falta fazer o get de areas
        const controlAreas = await getAreas(userLogged.areas);
        setAreas(db.areas);
        setLogged(true);
      }
      else {
        alert("Não foi encontrado nenhum usuário com estas informações")
        setPassword('');
        setUser('');
      }

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
            delay={2500}>
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
            delay={2500}>
            <Button
              title="Efetuar Login"
              color="#23b5b5"
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
