import * as React from 'react';
import { stylesCardArea } from './CardAreaStyle';
import { Button, Card } from 'react-native-paper';

const CardArea = (props) => {
  console.log(props.props);
  return (

    <>
      <Card style={stylesCardArea.container}>
        <Card.Title title="Nome Área" subtitle="Cultura Atual" />
        <Card.Cover
          style={stylesCardArea.imgArea}
          source={require('../../assets/lavoura1.jpg')}
        />
      </Card>
      <Button title="Informações da Área"
        color="#23b5b5"
        accessibilityLabel="Botão para ir até as informações da área"
        onPress={() => {
          console.log("Click");
          props.props.setViewInfo()
        }} />
    </>

  );
};

export default CardArea;
