import React, { Component } from 'react';

import Girl from './Girl';

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';


import NavigationBar from './NavigationBar';

export default class Boy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            word: ''

        };
    }

    render() {

        return (
            <View style={styles.container}>
                <NavigationBar title={'luoer'}
                    style={{ backgroundColor: 'green' }}

                    
                />
                <Text style={styles.text}>我是luoer</Text>
                <Text style={styles.text} onPress={() => {
                    this.props.navigator.push({
                        component: Girl,
                        params: {
                            word: '一只玫瑰',
                            onCallBack: (word) => {
                                this.setState({
                                    word: word
                                });
                            }
                        }
                    })

                }}>送瓜瓜一只花花:)</Text>

                <Text style={styles.text}>收到guaer送的{this.state.word}</Text>
            </View>
        );
    };

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'gray'
    },
    text: {
        backgroundColor: 'orange',
        fontSize: 22
    }
});
