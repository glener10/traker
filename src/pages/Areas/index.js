import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import NavBar from '../../components/NavigationBar';
import CardArea from '../../components/CardArea';
import { stylesAreas } from './AreasStyle';

const Areas = props => {
  function functionViewInfo(area) {
    props.props.setViewInfo(area);
  }
  function execLogout() {
    props.props.logout();
  }

  return (
    <>
      <NavBar props={{ props, execLogout, tipo: "AREAS" }} />
      <SafeAreaView style={stylesAreas.container}>
        <ScrollView>
          {props.props.areas.map(area => {
            return <CardArea props={{ area, functionViewInfo }} />;
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Areas;
