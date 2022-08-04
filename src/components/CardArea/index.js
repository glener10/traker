import * as React from 'react';
import { stylesCardArea } from './CardAreaStyle';
import { Button, Card } from 'react-native-paper';

const CardArea = props => {
  return (
    <>
      <Card style={stylesCardArea.container}>
        <Card.Title
          title={props.props.area.nomeArea}
          subtitle={props.props.area.culturaAtual}
        />
        <Card.Cover
          style={stylesCardArea.imgArea}
          source={require('../../assets/lavoura1.jpg')}
        />
        <Button
          style={stylesCardArea.btn}
          accessibilityLabel="Botão para ir até as informações da área"
          color="white"
          onPress={() => {
            props.props.functionViewInfo(props.props.area);
          }}>
          Informações da Área
        </Button>
      </Card>
    </>
  );
};

export default CardArea;
