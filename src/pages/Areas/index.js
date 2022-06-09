import React from 'react';
import { Text, Button } from 'react-native';

const Areas = (props) => {

  function geraConsole() {
    console.log(props.props.userLogged);
    console.log(props.props.areas);
  }

  return (
    <>
      <Text>Eu sou uma nova tela</Text>
      <Button
        title="Gerar Log area e userLogged"
        color="#156AE9"
        accessibilityLabel="Botão para exibir Log"
        onPress={() => geraConsole()}
      />
    </>
  );
};

export default Areas;
