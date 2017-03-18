import React, { Component } from 'react';

import { View, Text, StyleSheet, Navigator } from 'react-native';


import HomePage from './HomePage';

export default class WelcomePage extends Component {


    componentDidMount() {
        this.timer = setTimeout(() => {
            this.props.navigator.resetTo({
                component: HomePage
            })
        }, 2000);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }



    render() {
        return <View>
            <Text>Welcome1</Text>

        </View>
    }

}