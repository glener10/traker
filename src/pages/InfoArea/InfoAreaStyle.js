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
  conteudo: {
    fontSize: 100,
    color: 'red',
  },
});
