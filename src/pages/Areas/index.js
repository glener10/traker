import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import NavBar from '../../components/NavigationBar';
import CardArea from '../../components/CardArea';
import {stylesAreas} from './AreasStyle';

const Areas = props => {
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
