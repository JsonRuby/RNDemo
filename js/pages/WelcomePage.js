import React, { Component } from 'react';

import { View, Text, StyleSheet, Navigator } from 'react-native';

import NavigationBar from '../common/NavigationBar';

export default class WelcomePage extends Component {


    componentDidMount() {
        this.timer = setTimeout(() => {
            this.props.navigator.resetTo({
                component: WelcomePage
            })
        }, 2000);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }



    render() {
        return <View>
            <Text>Welcome</Text>

        </View>
    }

}