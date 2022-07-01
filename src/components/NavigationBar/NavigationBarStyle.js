import {StyleSheet} from 'react-native';

export const stylesNav = StyleSheet.create({
  up: {
    flex: 1,
    top: 0,
    flexDirection: 'row',
    backgroundColor: '#23b5b5',
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    alignContent: 'center',
    maxHeight: 70,
  },
  imgPerfil: {
    flex: 1,
    marginLeft: 15,
    maxHeight: 50,
    maxWidth: 50,
    borderRadius: 50,
  },
  name: {
    flex: 1,
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  icon: {
    flex: 1,
    maxHeight: 50,
    maxWidth: 50,
    marginRight: 15,
    height: 50,
  },
  imgLogout: {
    flex: 1,
    maxHeight: 35,
    maxWidth: 35,
    marginRight: 15,
    backgroundColor: '#23b5b5',
    width: 35,
  },
});
