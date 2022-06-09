import {StyleSheet} from 'react-native';
//TODO: Igor, está utilizando essa biblioteca?
//import {any} from 'react-native/Libraries/Text/TextNativeComponent';

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
  },
  input: {
    height: 'auto',
    width: 'auto',
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 1.5,
    padding: 10,
    borderRadius: 10,
  },
  form: {
    marginTop: '-50%',
  },
  inputButton: {
    marginTop: 30,
  },
});
