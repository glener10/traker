import React, {Fragment} from 'react';
import NavBar from '../../components/NavigationBar';
import CardArea from '../../components/CardArea';
import {stylesAreas} from './AreasStyle';
import {View} from 'react-native-animatable';

const Areas = props => {
  //console.log(props.props);
  return (
    <>
      <NavBar props={props.props} />
      <View style={stylesAreas.container}>
        {props.props.areas.map(area => {
          return <CardArea area={area} />;
        })}
      </View>
    </>
  );
};

export default Areas;
