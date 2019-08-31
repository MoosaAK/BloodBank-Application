
// BLOOD BANK
// Discription of MarkAttendance.js
// {MarkAttendance > ShowCurrentDate + Button ToNavViewAttendance}


import React from 'react';
import { StyleSheet, Text, View, Button, Image,SearchBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class ViewProfile extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 20, color: '#121149', fontWeight: "bold", marginTop: -100 }}>VIEW PROFILE</Text>

                <TouchableOpacity onPress={this.Send_Data_Function} onPress={() =>
                    this.props.navigation.navigate('Page')
                } activeOpacity={0.7} style={styles.button} >

                    <Text style={styles.buttonText}>DASHBOARD</Text>

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
        backgroundColor: 'black',
        padding: 12,
        width: 280,
        marginTop: 12,
    },
    buttonText:{
        color:'white'
    }

});

