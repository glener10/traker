import React, {Fragment} from 'react';
import {View, Image, Button, Text} from 'react-native';
import {stylesInfoArea} from './InfoAreaStyle';
import * as Animatable from 'react-native-animatable';

const InfoArea = props => {
  console.log(props);

  return (
    <Animatable.View
      style={stylesInfoArea.container}
      animation="fadeInLeft"
      delay={500}>
      <Image
        source={require('../../assets/lavoura1.jpg')}
        style={stylesInfoArea.imgArea}
      />
      <Text>Pragas</Text>
      {props.props.area.sensor.pragas.map((praga, key) => {
        <Button
          title="QQQ"
          color="red"
          accessibilityLabel="Botão para ir até as informações da área"
          style={{
            width: 100,
            backgroundColor: 'red',
            marginTop: 200,
            color: 'red',
          }}
        />;
      })}
      <Text>{props.props.area.sensor.pragas[1].nome}</Text>
    </Animatable.View>
  );
};

export default InfoArea;
