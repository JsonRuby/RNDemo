
import TabNavigator from 'react-native-tab-navigator';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
import DataRepository from '../expand/dao/DataRepository';
import NavigationBar from '../common/NavigationBar';


const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
export default class PopularPage extends Component {
    constructor(props) {
        super(props);
        this.dataRepository = new DataRepository()
        this.state = {
            result: ''
        }
    }


    onLoad() {
        let url = this.genUrl(this.text);
        this.dataRepository.fetchNetRepository(url)
            .then(result => {
                this.setState({
                    result: JSON.stringify(result)
                })
            })
            .catch(error => {
                this.setState({
                    result: JSON.stringify(error)
                });
            })


    }

    genUrl(key) {
        return URL + key + QUERY_STR;
    }

    render() {
        return (
            <View>
                <NavigationBar
                    title='最热'
                    style={{ backgroundColor: '#6495ED' }}

                />

                <Text onPress={() => {
                    this.onLoad()
                }} >获取资料</Text>
                <TextInput style={{ height: 50 }}
                    onChangeText={text => this.text = text}
                ></TextInput>

                <Text style={{ height: 500 }} >{this.state.result}</Text>
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
    image: {
        height: 22,
        width: 22
    }
});


