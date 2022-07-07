import React, {Container} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import NavBar from '../../components/NavigationBar';
import {stylesInfoArea} from './InfoAreaStyle';
import * as Animatable from 'react-native-animatable';

const InfoArea = props => {
  function LOGOUT() {
    props.props.comeBackAreas();
  }
  return (
    <Animatable.View
      style={stylesInfoArea.container}
      animation="fadeInLeft"
      delay={500}>
      <NavBar props={{props, LOGOUT, tipo: 'INFO'}} />
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
            <View style={stylesInfoArea.conteudoScrollInfo}>
              <Text style={stylesInfoArea.tittle}>Nome da Área:</Text>
              <Text style={stylesInfoArea.conteudoInfo}>
                {props.props.area.nomeArea}
              </Text>
            </View>
            <View style={stylesInfoArea.conteudoScrollInfo}>
              <Text style={stylesInfoArea.tittle}>Largura:</Text>
              <Text style={stylesInfoArea.conteudoInfo}>
                {props.props.area.largura}
              </Text>
            </View>
            <View style={stylesInfoArea.conteudoScrollInfo}>
              <Text style={stylesInfoArea.tittle}>Comprimento:</Text>
              <Text style={stylesInfoArea.conteudoInfo}>
                {props.props.area.comprimento}
              </Text>
            </View>
            <View style={stylesInfoArea.conteudoScrollInfo}>
              <Text style={stylesInfoArea.tittle}>Tamanho em Hectares:</Text>
              <Text style={stylesInfoArea.conteudoInfo}>
                {props.props.area.tamanho}
              </Text>
            </View>
            <View style={stylesInfoArea.conteudoScrollInfo}>
              <Text style={stylesInfoArea.tittle}>Cultura Atual:</Text>
              <Text style={stylesInfoArea.conteudoInfo}>
                {props.props.area.culturaAtual}
              </Text>
            </View>
            <View style={stylesInfoArea.conteudoScrollInfo}>
              <Text style={stylesInfoArea.tittle}>Status do Sensor:</Text>
              <Text style={stylesInfoArea.conteudoInfo}>
                {props.props.area.statusSensor}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Animatable.View>
  );
};

export default InfoArea;
