import React from 'react';
import { Text, View } from 'react-native';
import { stylesNav } from './NavigationBarStyle';

const NavBar = () => {

  return (
    <View style={stylesNav.up}>
      <View style={stylesNav.name}>
        <Text>ROI</Text>
        <Text style={stylesNav.icon}>Aqui tem um ícone</Text>
      </View>
    </View>
  );
};


export default NavBar;