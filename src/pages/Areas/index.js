import React from 'react';
import { Text, Button } from 'react-native';
import NavBar from '../../components/NavigationBar';
import CardArea from '../../components/CardArea';

const Areas = (props) => {
  console.log(props.props);
  return (
    <>
      <NavBar />
      <CardArea />
    </>
  );
};

export default Areas;
