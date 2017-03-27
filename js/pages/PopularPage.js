
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ListView
} from 'react-native';
import DataRepository from '../expand/dao/DataRepository';
import NavigationBar from '../common/NavigationBar';

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';

export default class PopularPage extends Component {


    render() {
        return (
            <View style={styles.container} >
                <NavigationBar
                    title='最热'
                />

                <ScrollableTabView
                    renderTabBar={() => <ScrollableTabBar />}
                >
                    <PopularTab tabLabel="java">Java</PopularTab>
                    <PopularTab tabLabel="ios">Ios</PopularTab>
                    <PopularTab tabLabel="android">Android</PopularTab>
                    <PopularTab tabLabel="javascript">Javascript</PopularTab>

                </ScrollableTabView>
            </View>

        );
    }
}

class PopularTab extends Component {

    constructor(props) {
        super(props);
        this.dataRepository = new DataRepository()
        this.state = {
            result: '',
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows([])
        }
    }

    componentDidMount() {
        this.loadData();
    }

    genUrl() {
        return URL + this.props.tabLabel + QUERY_STR;
    }

    loadData() {
        let url = this.genUrl();
        this.dataRepository.fetchNetRepository(url)
            .then(result => {
                console.log("success?:" + result.items.length);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(result.items)
                });
            })
            .catch(error => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows([])
                });
                console.log("err?:" + error);
            })
    }

    renderRow(data) {
        return <View>
            <Text>{data.full_name}</Text>
        </View>;
    }

    render() {
        return <View>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(data) => { this.renderRow(data) }}
                enableEmptySections={true}
            />
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});


