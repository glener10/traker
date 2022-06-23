import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar, ScrollView} from 'react-native';
import NavBar from '../../components/NavigationBar';
import CardArea from '../../components/CardArea';
import {stylesAreas} from './AreasStyle';
import {View} from 'react-native-animatable';

const Areas = props => {
  //console.log(props.props);
  return (
    <>
      <NavBar props={props.props} />
      <SafeAreaView style={stylesAreas.container}>
        <ScrollView>
          {props.props.areas.map(area => {
            return <CardArea area={area} />;
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Areas;
