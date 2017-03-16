import React, { Component } from 'react';

import Girl from './Girl';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

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

                }}>送瓜瓜一只花花</Text>

                <Text style={styles.text}>收到guaer送的{this.state.word}</Text>
            </View>
        );
    };

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center'
    },
    text: {
        backgroundColor: 'orange',
        fontSize: 22
    }
});
