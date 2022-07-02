import {StyleSheet, StatusBar} from 'react-native';

export const stylesInfoArea = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  imgArea: {
    marginTop: 70,
    //position: 'relative',
    width: '100%',
    height: 200,
    //resizeMode: 'contain',
  },
  conteudo: {
    fontSize: 100,
    color: 'red',
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
    paddingBottom: 10,
    borderBottomColor: '#23b5b5',
    borderBottomWidth: 1,
  },
  sensorContainer: {
    //marginTop: 20,
    margin: 15,
    borderColor: '#23b5b5',
    borderWidth: 5,
    borderRadius: 20,
  },
  scroll: {
    padding: 10,
    margin: 10,
  },
  conteudoScroll: {
    margin: 5,
  },
});
