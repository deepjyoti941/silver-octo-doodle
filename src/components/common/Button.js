// import library for making Component
import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';

// Make a component
class Button extends Component {

  render() {
    const {onPress, children} = this.props;
    const {textStyle,buttonStyle} = styles;

    return (
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}> {children} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1, // flex 1 will expand as much content is there in view
    alignSelf: 'stretch', // propert of flexbox
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
}

// Make the component available to other parts of the app
export {Button};
