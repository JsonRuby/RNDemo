/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


export default class imooc_gp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            renderIcon={() => <Image source={require('./res/images/ic_popular.png')} />}
            renderSelectedIcon={() => <Image source={require('./res/images/ic_popular.png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <View>
              <Text>Home Page</Text>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            renderIcon={() => <Image source={require('./res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image source={require('./res/images/ic_trending.png')} />}
            onPress={() => this.setState({ selectedTab: 'profile' })}>
            <View>
              <Text>Profile Page</Text>
            </View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});


AppRegistry.registerComponent('imooc_gp', () => imooc_gp);
