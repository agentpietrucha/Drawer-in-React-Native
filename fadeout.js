import React, { Component, useEffect, useState } from 'react';
import { Animated } from 'react-native';

export const FadeOut = (props) => {
  const [fadeAnim] = useState(new Animated.Value(1));

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 0,
        duration: props.duration,
      }
    ).start();
  }, [])
  return(
    <Animated.View style={{...props.style, opacity: fadeAnim}}>
      {props.children}
    </Animated.View>
  );
}