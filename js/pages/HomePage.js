
import TabNavigator from 'react-native-tab-navigator';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import PopularPage from './PopularPage';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'tb_popular'
        }

    }
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_popular'}
                    selectedTitleStyle={{ color: 'red' }}
                    title="最熱"
                    renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_popular.png')} />}
                    renderSelectedIcon={() => <Image style={[styles.image, { tintColor: 'red' }]} source={require('../../res/images/ic_popular.png')} />}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
                    <PopularPage></PopularPage>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_trending'}
                    selectedTitleStyle={{ color: 'red' }}
                    title="趨勢"
                    renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_popular.png')} />}
                    renderSelectedIcon={() => <Image style={[styles.image, { tintColor: 'red' }]} source={require('../../res/images/ic_popular.png')} />}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
                    <View>
                        <Text>Home</Text>
                    </View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_favorite'}
                    selectedTitleStyle={{ color: 'yellow' }}
                    title="收藏"
                    renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_trending.png')} />}
                    renderSelectedIcon={() => <Image style={[styles.image, { tintColor: 'red' }]} source={require('../../res/images/ic_trending.png')} />}
                    onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
                    <View>
                        <Text>Profile</Text>
                    </View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_my'}
                    selectedTitleStyle={{ color: 'yellow' }}
                    title="我的"
                    renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_trending.png')} />}
                    renderSelectedIcon={() => <Image style={[styles.image, { tintColor: 'red' }]} source={require('../../res/images/ic_trending.png')} />}
                    onPress={() => this.setState({ selectedTab: 'tb_my' })}>
                    <View>
                        <Text>My</Text>
                    </View>
                </TabNavigator.Item>
            </TabNavigator>
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


