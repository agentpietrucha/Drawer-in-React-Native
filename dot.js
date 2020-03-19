import React from 'react';
import { View } from 'react-native';

export function Dot(x, y, size){
  return(<View style={{position: 'absolute', left: x, top: y, backgroundColor: 'pink', height: size, width: size, borderRadius: 100}}></View>);
}