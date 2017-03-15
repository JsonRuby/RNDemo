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
  View
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
        <Text>Profile</Text>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            renderIcon={() => <Text>123</Text>}
            renderSelectedIcon={() => <Text>123</Text>}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
           <Text>Home</Text>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            renderIcon={() => <Text>123</Text>}
            renderSelectedIcon={() => <Text>123</Text>}
            onPress={() => this.setState({ selectedTab: 'profile' })}>
            <Text>Profile</Text>
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
  },
  header1: {
    backgroundColor: 'red'
  },
  header2: {
    backgroundColor: 'green'
  }
});


AppRegistry.registerComponent('imooc_gp', () => imooc_gp);
