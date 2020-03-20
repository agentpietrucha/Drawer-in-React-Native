import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Splash extends Component{
  render(){
    return(
      <View style={myStyles.container}>
        <Text style={myStyles.title}>Drawer</Text>
        <Text style={myStyles.subtitle}>by SAWICCY Corp.</Text>
      </View>
    );
  }
}

const myStyles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'antiquewhite',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 15,
  }
}