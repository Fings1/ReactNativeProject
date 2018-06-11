import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

export default class ListPlayer extends Component{

    constructor(props){
        super(props);

        this.state = {
            loading: true
        };
    }

    // Set options for toolbar
    static navigationOptions = {
        title: "List Players"
    }

    //This function is call when the app is mounted
    componentDidMount(){
        this.getDataEndPoint();
    }

    //Function where get data from endpoint
    getDataEndPoint = () =>{
        fetch('http://www.mocky.io/v2/5aa722ea2f0000e8048ea463')
            .then((response) =>response.json())
            .then((responseJson) =>{
                this.setState({
                    loading: false,
                    dataSource: responseJson
                });

            }).catch((error) =>{
                console.log(error);
            });
    }

    //This function return a view for separate each item in the list
    flatListItemSeparator = () =>{
        return(
            <View style= {listStyles.itemSeparator} />
        );
    }

    render(){
        const { navigate } = this.props.navigation;

        if(this.state.loading){
            return(
                <View style = {listStyles.loading}>
                    <ActivityIndicator/>
                </View>
            );
        }

        return(
            <View>
                <FlatList
                    data = {this.state.dataSource}
                    ItemSeparatorComponent = {this.flatListItemSeparator}
                    renderItem = {({item}) =>
                        <TouchableOpacity onPress = {() => navigate("ScreenTwo", {screen: item})}>
                            <View style = {listStyles.rowItem}>
                                <Image style = {listStyles.imageItem} source = {{uri:item.thumbnail}}/>
                                <View style ={listStyles.imageColumn}>
                                    <Text style = {listStyles.itemName}>{item.name}</Text>
                                    <Text style = {listStyles.itemAge}>Age: {item.age}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                    keyExtractor ={(item,index) =>index.toString()}
                />
            </View>
        );
    }

}



///Define styles for Component
const listStyles = StyleSheet.create({
    itemSeparator :{
        height: 5,
        width :'100%',
        backgroundColor: "#0E0E0E"
    },

    loading: {
        flex: 1,
        paddingTop: 20
    },

    rowItem: {
        flex: 1,
        flexDirection:'row'
    },

    imageItem: {
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined
    },

    imageColumn: {
        flex:1,
        flexDirection:'column'
    },

    itemName: {
        fontWeight:'bold',
        fontSize:18
    },

    itemAge: {
        fontSize:16,
        marginTop:65
    }

});
