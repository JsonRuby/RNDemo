import React, { Component } from 'react';


import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import NavigationBar from './NavigationBar';


export default class Girl extends Component {

    constructor(props) {
        super(props);
        this.state = {
            word: ''

        };
    }

    renderButton(image) {
        return <TouchableOpacity
            onPress={() => {
                this.props.navigator.pop();
            }}
        >

            <Image style={{ width: 22, height: 22, margin: 5 }}
                source={image}></Image>
        </TouchableOpacity>
    }

    render() {

        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'girl'}


                    leftButton={
                        this.renderButton(require('./res/images/ic_arrow_back_white_36pt.png'))
                    }

                    rightButton={
                        this.renderButton(require('./res/images/ic_star.png'))
                    }

                />

                <Text style={styles.text}>我是guaer</Text>
                <Text style={styles.text}>收到luoer的{this.props.word}</Text>
                <Text style={styles.text}
                    onPress={() => {
                        this.props.onCallBack('一坨巧克力');
                        this.props.navigator.pop();

                    }}
                >回赠luoer巧克力 </Text>

            </View>
        );
    };

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'blue'
    },
    text: {
        backgroundColor: 'green',
        fontSize: 22
    }
});
