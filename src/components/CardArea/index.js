import * as React from 'react';
import {Text, View} from 'react-native';
import {stylesCardArea} from './CardAreaStyle';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const CardArea = area => {
  console.log(area);

  return (
    <Card style={stylesCardArea.container}>
      <Card.Title title="Nome Área" subtitle="Cultura Atual" />
      <Card.Cover
        style={stylesCardArea.imgArea}
        source={require('../../assets/lavoura1.jpg')}
      />
    </Card>
  );
};

export default CardArea;
