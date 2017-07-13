import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

export default class App extends Component {
  componentWillMount() {
      firebase.initializeApp({
      apiKey: 'AIzaSyDoa3WDIenjrYKYeUvQMp3TAZSoeZXgBus',
      authDomain: 'react-auth-app-43255.firebaseapp.com',
      databaseURL: 'https://react-auth-app-43255.firebaseio.com',
      projectId: 'react-auth-app-43255',
      storageBucket: 'react-auth-app-43255.appspot.com',
      messagingSenderId: '1076215807726'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <Text>An App!</Text>
      </View>
    );
  }
}
