import React from 'react';
import {  SafeAreaView, StyleSheet } from 'react-native';
import MainScr from './src/Screens/MainScr';

const ComponentName = props => {

  return (
    
    <SafeAreaView style={styles.container}>
      <MainScr></MainScr>
    </SafeAreaView>
  );
};

export default ComponentName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
