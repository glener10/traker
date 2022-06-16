import React from 'react';
import NavBar from '../../components/NavigationBar';
import CardArea from '../../components/CardArea';
import {View} from 'react-native';

const Areas = props => {
  //console.log(props.props);
  return (
    <>
      <View>
        <NavBar props={props.props} />
        {props.props.areas.map(area => {
          return <CardArea area={area} />;
        })}
      </View>
    </>
  );
};

export default Areas;
