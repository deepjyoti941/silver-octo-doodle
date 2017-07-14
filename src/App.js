import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
      firebase.initializeApp({
      apiKey: 'AIzaSyDoa3WDIenjrYKYeUvQMp3TAZSoeZXgBus',
      authDomain: 'react-auth-app-43255.firebaseapp.com',
      databaseURL: 'https://react-auth-app-43255.firebaseio.com',
      projectId: 'react-auth-app-43255',
      storageBucket: 'react-auth-app-43255.appspot.com',
      messagingSenderId: '1076215807726'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false })
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return  <CardSection>
                  <Button onPress={() => firebase.auth().signOut()}>
                    Log Out
                  </Button>
                </CardSection>
      case false:
        return <LoginForm />;
      default:
        return <View style={styles.spinnerContainerStyle}>
          <Spinner spinnerSize="large"/>
        </View>

    }

  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerContainerStyle: {
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
}
