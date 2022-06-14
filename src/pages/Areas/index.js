import React from 'react';
import NavBar from '../../components/NavigationBar';
import CardArea from '../../components/CardArea';

const Areas = (props) => {
  //console.log(props.props);
  return (
    <>
      <NavBar props={props.props} />
      <CardArea />
    </>
  );
};

export default Areas;
