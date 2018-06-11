import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default class Detail extends Component{

    //Config for toolbar
    static navigationOptions = ({ navigation }) =>{
        return ({
            title: "Detail"
        });
    }

    //this function receives the array profession and  return a view with the professions
    showProfessions = (elements) =>{
        return elements.map((text, i) =>
            <Text style = {detailStyles.profession} key = {i}>{text}</Text>
        );
    }

    render(){
        const { state, navigator } = this.props.navigation;

        return(
            <ScrollView>
                <View>
                    <View>
                        <Image style = {detailStyles.image} source = {{uri: state.params.screen.thumbnail}}/>
                    </View>
                    <View style = {detailStyles.nameContainer}>
                        <Text style = {detailStyles.textElements}>{state.params.screen.name}</Text>
                    </View>
                    <View>
                        <Text style ={detailStyles.textElements}>Age:  {state.params.screen.age}</Text>
                        <Text style ={detailStyles.textElements}>Hair Color:  {state.params.screen.hair_color}</Text>
                        <Text style ={detailStyles.textElements}>Weight:   {state.params.screen.weight}</Text>
                        <Text style ={detailStyles.textElements}>Height:   {state.params.screen.height}</Text>
                        <Text style ={detailStyles.textElements}>Professions:</Text>
                        {this.showProfessions(state.params.screen.professions)}
                    </View>
                </View>
            </ScrollView>
        );
    }
}

//Styles for Detail
const detailStyles = StyleSheet.create({

    profession: {
        marginLeft:38,
        fontSize:20
    },

    nameContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    textElements: {
        fontSize:20,
        fontWeight:'bold'
    },

    image: {
        width: '100%',
        height: 300
    }

});
