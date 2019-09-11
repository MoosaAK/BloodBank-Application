// BLOOD BANK
// Discription of MarkAttendance.js
// {MarkAttendance > ShowCurrentDate + Button ToNavViewAttendance}


import React from 'react';
import * as firebase from "firebase"
import Action from './Action/Action'
import { StyleSheet, Text, View, Button, TextInput, Image, SearchBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class BloodBank extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            search: '',
        })
    }

    searchHandler() {
        const { search } = this.state;
        this.props.searchBar(search.toUpperCase());
        this.setState({
            search: ''
        })

    }
    // readUserData() {
    //     firebase.database().ref('donor/0001').on('value', function (recive) {
    //         var a = recive
    //         console.log(a)
    //         // var name= snapshot
    //     });
    // }

    // SearchFilterFunction(text) {
    //     //passing the inserted text in textinput
    //     const newData = this.arrayholder.filter(function (a) {
    //         //applying filter for the inserted text in search bar
    //         const itemData = a.title ? a.title.toUpperCase() : ''.toUpperCase();
    //         const textData = text.toUpperCase();
    //         return itemData.indexOf(textData) > -1;
    //     });
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 20, color: '#121149', fontWeight: "bold", marginTop: -100 }}>BLOOD BANK</Text>
                <TouchableOpacity onPress={this.ShowCurrentDate}>
                    <Text style={{ color: '#121149', fontSize: 15 }}>
                        {new Date().getDate()} - {new Date().getMonth() + 1} - {new Date().getFullYear()}
                    </Text>
                </TouchableOpacity>


                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        placeholder="Search Here..."
                        value={this.state.search}
                        onChangeText={(text) => this.setState({ search: text.toUpperCase() })}
                        placeholderTextColor="black"
                        activeOpacity={0.7}
                        style={styles.textInputStyle}

                    />
                    <TouchableOpacity>
                        <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 10 }}>🔍</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() =>
                        this.props.navigation.navigate('Page')
                    } activeOpacity={0.7} style={styles.button} >

                    <Text style={styles.buttonText}>BACK TO DASHBOARD</Text>

                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'silver',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',

    },

    button: {
        alignItems: 'center',
        padding: 10,
        width: 180,
        marginTop: 12,
        backgroundColor:'black'
    },
    textInputStyle: {

        height: 37,
        width: 140,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        marginTop: 15
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15
    },

});

