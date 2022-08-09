import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import NavBar from '../../components/NavigationBar';
import CardArea from '../../components/CardArea';
import { stylesAreas } from './AreasStyle';
import useDb from '../../hooks/useDb';

const Areas = props => {
  const [areas, setAreas] = React.useState([]);
  const db = useDb();

  function functionViewInfo(area) {
    props.props.setViewInfo(area);
  }
  function execLogout() {
    props.props.logout();
  }


  React.useEffect(() => {
    if (props.props.userLogged.areas.length > 0) {
      let a = [];
      props.props.userLogged.areas.map((value, index) => {
        db.areas.map((areaDb, index) => {
          if (areaDb.codArea == value) {
            a.push(areaDb);
          }
        })
      });
      setAreas(a);
    }
  }, []);



  return (
    <>
      <NavBar props={{ props, execLogout, tipo: "AREAS" }} />
      {areas.length > 0 ?
        <SafeAreaView style={stylesAreas.container}>
          <ScrollView>
            {areas.map(area => {
              return <CardArea props={{ area, functionViewInfo }} />;
            })}
          </ScrollView>
        </SafeAreaView>
        : <Text>Nenhuma área encontrada...</Text>}
    </>
  );
};

export default Areas;
