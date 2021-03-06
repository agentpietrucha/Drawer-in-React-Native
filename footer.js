import React, { Component } from 'react';
import { Text, View, Picker, TouchableHighlight } from 'react-native';

export default class Footer extends Component{
  render(){
    return(
      <View style={myStyles.container}>
        <View style={myStyles.size_picker_container}>
          <Text>Pick size:</Text>
          <Picker mode='dropdown' selectedValue={this.props.size} itemStyle={myStyles.picker} style={myStyles.picker} onValueChange={this.props.onValueChange}>
            <Picker.Item label='small' value={10}/>
            <Picker.Item label='medium' value={20}/>
            <Picker.Item label='big' value={30}/>
          </Picker>
        </View>
        <View style={myStyles.btnContainer}>
          <TouchableHighlight onPress={this.props.onPress} style={myStyles.btnRefresh}>
            <Text style={{color: '#f1f1f1'}}>refresh</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.props.onPressUndo} style={myStyles.btnUndo}>
            <Text style={{color: '#f1f1f1'}}>undo</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const myStyles = {
  container: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  size_picker_container: {
    flex: 3,
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    height: 50,
    width: 200,
    alignItems: 'center',
  },
  btnContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnRefresh: {
    backgroundColor: '#c77180',
    padding: 10,
    marginRight: 40,
  },
  btnUndo: {
    backgroundColor: '#c77180',
    padding: 10,
    marginRight: 20,
  },
}