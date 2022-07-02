import React, {Fragment} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import NavBar from '../../components/NavigationBar';
import {stylesInfoArea} from './InfoAreaStyle';
import * as Animatable from 'react-native-animatable';

const InfoArea = props => {
  console.log(props);

  return (
    <Animatable.View
      style={stylesInfoArea.container}
      animation="fadeInLeft"
      delay={500}>
      <NavBar props={props.props} />
      <Image
        source={require('../../assets/lavoura1.jpg')}
        style={stylesInfoArea.imgArea}
      />
      <ScrollView>
        <View style={stylesInfoArea.sensorContainer}>
          <Text style={stylesInfoArea.h1}>Pragas</Text>
          <View style={stylesInfoArea.scroll}>
            {props.props.area.sensor.pragas.map((praga, key) => {
              return (
                <Text style={stylesInfoArea.conteudoScroll}>{praga.nome}</Text>
              );
            })}
          </View>
        </View>
        <View style={stylesInfoArea.sensorContainer}>
          <Text style={stylesInfoArea.h1}>Doenças</Text>
          <View style={stylesInfoArea.scroll}>
            {props.props.area.sensor.doencas.map((doenca, key) => {
              return (
                <Text style={stylesInfoArea.conteudoScroll}>{doenca.nome}</Text>
              );
            })}
          </View>
        </View>
        <View style={stylesInfoArea.sensorContainer}>
          <Text style={stylesInfoArea.h1}>Informações da área</Text>
          <View style={stylesInfoArea.scroll}>
            <Text>Abacaxi</Text>
          </View>
        </View>
      </ScrollView>
    </Animatable.View>
  );
};

export default InfoArea;
