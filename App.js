import React, { Component } from 'react';
import { Text, View, PanResponder, Button, Dimensions, TouchableHighlight, Picker, StatusBar } from 'react-native';
import Footer from './footer';
import Title from './title';
import { Dot } from './dot';
import Splash from './splash';
import { FadeIn } from './fadein';
import { FadeOut } from './fadeout';

const DOT_SIZE_SMALL = 10;
const DOT_SIZE_MEDIUM = 20;
const DOT_SIZE_BIG = 30;
const DOT_COLOR = 'aliceblue';
const DOT_HIGHLIGHT_COLOR = '#9dbfdc';
const DEVICE_HEIGHT = Dimensions.get('window').height;
const equalize = DEVICE_HEIGHT * 0.1;
const SPLASH_FADE_OUT_DURATION = 2000;
const MAIN_FADE_IN_DURATION = 500;

export default class App extends Component {

  dot: ?React.ElementRef<typeof View> = null;

  constructor(props){
    super(props);
    this.state = {
      xStatic: 0,
      yStatic: 0,
      arr: [],
      size: DOT_SIZE_SMALL,
      splash: true,
    };
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove:  this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderRelease,
      onPanResponderTerminate: this.handlePanResponderTerminate,
      onPanResponderTerminationRequest: (evt, gestureState) => true,
    });
  }
  handlePanResponderGrant = (e, state) => {
    this.setState({
      xStatic: state.x0,
      yStatic: state.y0 - equalize,
    });
    this.state.arr.push(Dot(state.x0 - DOT_SIZE_MEDIUM/2, state.y0 - equalize - DOT_SIZE_MEDIUM/2, this.state.size));
  }
  handlePanResponderRelease = (e, state) => {}
  handlePanResponderMove = (e, state) => {
    this.setState({
      xStatic: state.moveX,
      yStatic: state.moveY - equalize
    });
    this.state.arr.push(Dot(state.moveX - DOT_SIZE_MEDIUM/2, state.moveY - equalize - DOT_SIZE_MEDIUM/2, this.state.size));
  }
  handleOnPressRefresh = (e) => {
    this.setState({
      arr: [],
    })
  }
  handleOnPressUndo = (e) => {
    this.state.arr.pop();
    this.setState({
      arr: this.state.arr
    })
  }
  handleSizeSelection = (e) => {
    let sizeTmp;
    switch(Number(e)){
      case DOT_SIZE_SMALL:
        sizeTmp = DOT_SIZE_SMALL;
        break;
      case DOT_SIZE_MEDIUM:
        sizeTmp = DOT_SIZE_MEDIUM;
        break;
      case DOT_SIZE_BIG:
        sizeTmp = DOT_SIZE_BIG;
        break;
    }
    this.setState({
      size: sizeTmp,
    });
  }
  wait = async() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('result');
      }, SPLASH_FADE_OUT_DURATION)
    });
  }
  async componentDidMount(){
    let data = await this.wait();
    if(data !== null){
      this.setState({
        splash: false,
      });
    }
  }
  render() {
    if(this.state.splash === true){
      return(
        <FadeOut duration={SPLASH_FADE_OUT_DURATION + 750}>
          <Splash/>
        </FadeOut>
      );
    } else {
      return (
        <FadeIn duration={MAIN_FADE_IN_DURATION}>
          <View style={myStyles.container}>
            <StatusBar barStyle='dark-content'/>
            <Title/>
            <View style={myStyles.playGround} {...this._panResponder.panHandlers} ref={dot => {
              this.dot = dot;
            }}>
                <View>{this.state.arr}</View>
            </View>
            <View style={myStyles.footer}>
              <Footer 
              size={this.state.size}
              onValueChange={this.handleSizeSelection}
              onPress={this.handleOnPressRefresh}
              onPressUndo={this.handleOnPressUndo}/>
            </View>
          </View>
        </FadeIn>
      );

    }
  }
}

const myStyles = {
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'antiquewhite',
    justifyContent: 'flex-end',
  },
  playGround: {
    backgroundColor: 'cadetblue',
    height: '80%',
    width: '100%',
  },
  footer: {
    height: '10%',
    width: '100%',
    backgroundColor: 'thistle',
    flexDirection: 'row',
    borderTopWidth: 3,
    borderTopColor: '#327577', 
  },
}
