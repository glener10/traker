import React from 'react';
import NavBar from '../../components/NavigationBar';
import CardArea from '../../components/CardArea';
import {View} from 'react-native';
import {stylesAreas} from './AreasStyle';

const Areas = props => {
  //console.log(props.props);
  return (
    <>
      <NavBar props={props.props} />
      <View style={stylesAreas.containers}>
        {props.props.areas.map(area => {
          return <CardArea area={area} />;
        })}
      </View>
    </>
  );
};

export default Areas;
