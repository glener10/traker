import {StyleSheet} from 'react-native';

export const stylesNav = StyleSheet.create({
  up: {
    flex: 1,
    top: 0,
    flexDirection: 'row',
    backgroundColor: '#23b5b5',
    width: '100%',
    position: 'relative',
    alignItems: 'center',
    alignContent: 'center',
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
    maxHeight: 40,
    maxWidth: 40,
    marginRight: 15,
    backgroundColor: '#23b5b5',
    width: 40,
  },
});
