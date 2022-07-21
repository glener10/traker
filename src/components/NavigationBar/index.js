import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {stylesNav} from './NavigationBarStyle';
import Icon from 'react-native-vector-icons/AntDesign';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const NavBar = props => {
  function execLogout() {
    //alert('Fazendo logout');
    if (props.props.tipo == 'INFO') {
      props.props.LOGOUT();
    } else if (props.props.tipo == 'AREAS') {
      props.props.execLogout();
    } else {
      alert('Erro ao retornar');
    }
  }

  return (
    <View style={stylesNav.up}>
      <TouchableOpacity onPress={execLogout}>
        <Card.Cover
          style={stylesNav.imgLogout}
          source={require('../../assets/voltar.png')}
        />
      </TouchableOpacity>
      <Text style={stylesNav.name}>Minhas Áreas</Text>
      <Card.Cover
        style={stylesNav.imgPerfil}
        source={require('../../assets/opcoes.png')}
      />
    </View>
  );
};

export default NavBar;
