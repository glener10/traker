import React from 'react';
import Login from './pages/Login';
import { StyleSheet, View } from 'react-native';

export default function App() {


  return (
    <>
      < View style={styles.container} >
        <Login style={styles.title} />
      </ View >
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
});