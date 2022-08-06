import React, {Fragment} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import NavBar from '../../components/NavigationBar';
import {stylesInfoArea} from './InfoAreaStyle';
import * as Animatable from 'react-native-animatable';
import {Button} from 'react-native-paper';

const InfoArea = props => {
  function messageStatusGeralArea(status) {
    switch (status) {
      default:
        return 'Sua área está doidona!';
      case 1:
        return 'Sua área está em perfeitas condições!';
      case 2:
        return 'Cuidado, sua área está com possíveis infestações!';
      case 3:
        return 'Perigo, sua área está infestada!';
    }
  }

  function LOGOUT() {
    props.props.comeBackAreas();
  }

  function containOneAlertPragas(props) {
    let control = false;
    props.props.area.sensor.pragas.map((praga, key) => {
      if (Number(praga.alerta) > 1) {
        control = true;
      }
    });
    return control;
  }

  function containOneAlertDoencas(props) {
    let control = false;
    props.props.area.sensor.doencas.map((doenca, key) => {
      if (Number(doenca.alerta) > 1) {
        control = true;
      }
    });
    return control;
  }

  function statusGeralArea(props) {
    let status = 1;
    props.props.area.sensor.pragas.map((praga, key) => {
      if (Number(praga.alerta) > status) {
        status = Number(praga.alerta);
      }
    });
    props.props.area.sensor.doencas.map((doenca, key) => {
      if (Number(doenca.alerta) > status) {
        status = Number(doenca.alerta);
      }
    });
    return messageStatusGeralArea(status);
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
          <View style={stylesInfoArea.scrollGeral}>
            <Text style={stylesInfoArea.geral}>{statusGeralArea(props)}</Text>
          </View>
        </View>
        <View style={stylesInfoArea.sensorContainer}>
          {props.props.area.sensor.pragas.length > 0 &&
          containOneAlertPragas(props) ? (
            <>
              <Text style={stylesInfoArea.h1}>Pragas</Text>
              <View style={stylesInfoArea.scroll}>
                {props.props.area.sensor.pragas.map((praga, key) => {
                  if (praga.alerta != '1') {
                    return (
                      <View
                        key={key}
                        style={
                          praga.alerta == '1'
                            ? stylesInfoArea.conteudoDoencasPragasVerde
                            : praga.alerta == '2'
                            ? stylesInfoArea.conteudoDoencasPragasAmarelo
                            : praga.alerta == '3'
                            ? stylesInfoArea.conteudoDoencasPragasVermelho
                            : stylesInfoArea.conteudoDoencas
                        }>
                        <View
                          key={key}
                          style={
                            praga.alerta == '1'
                              ? stylesInfoArea.simboloAlertaVerde
                              : praga.alerta == '2'
                              ? stylesInfoArea.simboloAlertaAmarelo
                              : praga.alerta == '3'
                              ? stylesInfoArea.simboloAlertaVermelho
                              : stylesInfoArea.conteudoDoencas
                          }></View>
                        <Text style={stylesInfoArea.conteudoScroll}>
                          {praga.nome}
                        </Text>
                      </View>
                    );
                  }
                })}
              </View>
            </>
          ) : (
            <Fragment />
          )}
        </View>
        <View style={stylesInfoArea.sensorContainer}>
          {props.props.area.sensor.doencas.length > 0 &&
          containOneAlertDoencas(props) ? (
            <>
              <Text style={stylesInfoArea.h1}>Doenças detectadas</Text>
              <View style={stylesInfoArea.scroll}>
                {props.props.area.sensor.doencas.map((doenca, key) => {
                  if (doenca.alerta != '1') {
                    return (
                      <View
                        key={key}
                        style={
                          doenca.alerta == '1'
                            ? stylesInfoArea.conteudoDoencasPragasVerde
                            : doenca.alerta == '2'
                            ? stylesInfoArea.conteudoDoencasPragasAmarelo
                            : doenca.alerta == '3'
                            ? stylesInfoArea.conteudoDoencasPragasVermelho
                            : stylesInfoArea.conteudoDoencas
                        }>
                        <View
                          key={key}
                          style={
                            doenca.alerta == '1'
                              ? stylesInfoArea.simboloAlertaVerde
                              : doenca.alerta == '2'
                              ? stylesInfoArea.simboloAlertaAmarelo
                              : doenca.alerta == '3'
                              ? stylesInfoArea.simboloAlertaVermelho
                              : stylesInfoArea.conteudoDoencas
                          }></View>

                        <Text style={stylesInfoArea.conteudoScroll}>
                          {doenca.nome}
                        </Text>
                      </View>
                    );
                  }
                })}
              </View>
            </>
          ) : (
            <Fragment />
          )}
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
