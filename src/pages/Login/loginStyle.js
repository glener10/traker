import {StyleSheet} from 'react-native';
import {any} from 'react-native/Libraries/Text/TextNativeComponent';

export const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
  },
  logo: {
    flex: 0,
    width: '100%',
    height: '70%',
    aspectRatio: 1.0,
    justifyContent: 'space-around',
  },
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
