import {StyleSheet} from 'react-native';

export const stylesNav = StyleSheet.create({
  up: {
    flex: 1,
    top: 0,
    flexDirection: 'row',
    backgroundColor: '#23b5b5',
    height: 45,
    width: '100%',
    position: 'absolute',
    justifyContent: 'space-between',
  },
  name: {
    color: 'white',
    fontSize: 30,
  },
  icon: {
    marginLeft: 250,
  },
});
