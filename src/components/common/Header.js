// import library for making Component
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

// Make a component
class Header extends Component {

  // constructor(props, context) {
  //   super(props, context);
  // }

  render() {
    const {textStyle, viewStyle} = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{this.props.headerText}</Text>

      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center', // justifyContent position in vertical direction inside flexbox
    alignItems: 'center', // alignItems position in horizontal direction inside flexbox
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
}

// Make the component available to other parts of the app
export {Header};
