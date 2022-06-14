import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { stylesNav } from './NavigationBarStyle';
import Icon from 'react-native-vector-icons/AntDesign';

const NavBar = (props) => {

  function execLogout() {
    alert("Fazendo logout");
  }

  return (

    <View style={stylesNav.up}>
      <Text style={stylesNav.name}>{props.props.userLogged.username}</Text>
      <TouchableOpacity onPress={execLogout}>
        <Icon style={stylesNav.icon} name="logout" size={30} color='white' />
      </TouchableOpacity>
    </View>

  );
};


export default NavBar;