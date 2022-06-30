import {StyleSheet, StatusBar} from 'react-native';

export const stylesAreas = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
    width: '100%',
    paddingTop: StatusBar.currentHeight,
    marginTop: 15,
  },
});
