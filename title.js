import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Title extends Component{
  render(){
    return(
      <View style={myStyles.title}>
        <Text style={myStyles.titleText}>Drawer</Text>
        <Text style={myStyles.sawicki}>by SAWICCY corp.</Text>
      </View>
    );
  }
}
const myStyles = {
  title: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  sawicki: {
    fontSize: 10,
  },
}