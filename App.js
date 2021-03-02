
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import fbscreen from './screens/fb';
import inscreen from './screens/in';

export default class App extends React.Component {
  render() {
    return (

      <AppContainer />

    );
  }
}

const TabNavigator = createBottomTabNavigator({
  fb: { screen: fbscreen },
  in: { screen: inscreen }
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
