import * as React from 'react';
import {Text, View} from 'react-native';
import {stylesCardArea} from './CardAreaStyle';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const CardArea = area => {
  console.log(area);

  return (
    <Card style={stylesCardArea.container}>
      <Card.Title title="Card Title" subtitle="Card Subtitle" />
      <Card.Cover source={require('../../assets/lavoura1.jpg')} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

export default CardArea;
