import {StyleSheet} from 'react-native';

export const stylesInfoArea = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  imgArea: {
    //position: 'relative',
    top: 0,
    width: '100%',
    height: 300,
    //resizeMode: 'contain',
  },
  h1: {
    position: 'relative',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Roboto',
    top: 0,
    width: '100%',
    marginTop: 10,
    //resizeMode: 'contain',
  },
  containerPragasDoencas: {
    flex: 2,
    flexDirection: 'row',
  },
  containerPragasDoencasLeft: {
    //position: 'relative',
    width: '50%',
    height: 100,
  },
  containerPragasDoencasRight: {
    //position: 'relative',
    width: '50%',
    height: 200,
  },
});
