import React, {Fragment} from 'react';
import NavBar from '../../components/NavigationBar';
import CardArea from '../../components/CardArea';
import {stylesAreas} from './AreasStyle';

const Areas = props => {
  //console.log(props.props);
  return (
    <>
      <NavBar props={props.props} />
      <Fragment style={stylesAreas.container}>
        {props.props.areas.map(area => {
          return <CardArea area={area} />;
        })}
      </Fragment>
    </>
  );
};

export default Areas;
