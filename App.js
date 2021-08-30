import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomePage from './components/homePage'

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage  />
      {/* <Text>https://central.swoca.net/auth/login?signin=18e40287384ff23dd7bc70c3df30752f</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111111'
  }
});
