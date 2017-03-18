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


AppRegistry.registerComponent('imooc_gp', () => setup);
