/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import TabNavigator from 'react-native-tab-navigator';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Image
} from 'react-native';

import setup from './js/pages/setup';

export default class imooc_gp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tb_popular'
    }

  }
  render() {
    return (
      <Navigator
        initialRoute={{ component: Boy }}

        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component navigator={navigator} {...route.params} />;
        }}
      ></Navigator>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    height: 22,
    width: 22
  }
});


AppRegistry.registerComponent('imooc_gp', () => setup);
