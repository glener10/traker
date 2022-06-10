import React from 'react';
import { View, Image, Button, Text } from 'react-native';
import { stylesInfoArea } from './infoAreaStyle';
import * as Animatable from 'react-native-animatable';

const Areas = () => {
  const data = {
    codArea: '1',
    nomeArea: 'Unipampa',
    tamanho: '1.8',
    largura: '120',
    comprimento: '150',
    culturaAtual: 'Soja',
    statusSensor: 'ativo',
    coordenateX: '-29.78952352049523',
    coordenateY: '-55.76859685519926',
    img: 'end/lavoura1',
    sensor: {
      pragas: [
        {
          nome: 'Antracnose',
          alerta: '3',
          dataDeteccao: '10/06/2022',
        },
        {
          nome: 'Antracnose',
          alerta: '1',
          dataDeteccao: '10/06/2022',
        },
      ],
      doencas: [
        {
          nome: 'Antracnose',
          alerta: '3',
          dataDeteccao: '10/06/2022',
        },
        {
          nome: 'Antracnose',
          alerta: '2',
          dataDeteccao: '10/06/2022',
        },
      ],
    },
  };

  return (
    <>
      <View style={stylesInfoArea.container}>
        <Animatable.View animation="fadeInLeft" delay={500}>
          <Image
            source={require('../../assets/logo_app.png')}
            style={stylesInfoArea.imgArea}
          />
          <Text>{data.sensor.pragas[1].nome}</Text>
        </Animatable.View>
      </View>
    </>
  );
};

export default Areas;
