import React from 'react';
import {Text, View} from 'react-native';
import {stylesCardArea} from './CardAreaStyle';

const CardArea = area => {
  console.log(area);

  return (
    <View style={stylesCardArea.container}>
      <Text>{area.area.nomeArea}</Text>
    </View>
  );
};

export default CardArea;
