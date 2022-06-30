import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import NavBar from '../../components/NavigationBar';
import CardArea from '../../components/CardArea';
import {stylesAreas} from './AreasStyle';
import {Button} from 'react-native-paper';

const Areas = props => {
  //TODO: Passar para o card esse reducer como (props.props.setViewInfo())
  const functionViewInfo = props.props.setViewInfo;
  return (
    <>
      {/* <Button
        title="Informações da Área"
        color="red"
        accessibilityLabel="Botão para ir até as informações da área"
        style={{ width: 100, backgroundColor: 'red', marginTop: 100, color: 'white' }}
        onPress={() => {
          props.props.setViewInfo();
        }} /> */}
      <NavBar props={props.props} />
      <SafeAreaView style={stylesAreas.container}>
        <ScrollView>
          {props.props.areas.map(area => {
            return <CardArea props={{area, functionViewInfo}} />;
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Areas;
