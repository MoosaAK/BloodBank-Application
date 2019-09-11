
import * as React from 'react';
import * as firebase from "firebase"
import Action from '..//Action/Action'

import { Button, StyleSheet, Image, Text, TextInput, Picker, View } from 'react-native';
// import {Permissions} from 'expo'
import * as ImagePicker from "expo-image-picker"
import * as Permissions from 'expo-permissions';
import Constants from "expo-constants"
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class DonorForm extends React.Component {
    state = {
        image: null,
    };


    componentWillMount() {

        firebase.database().ref('DonorForm').on('value', (data) => {
            console.log(data.toJSON())
        })

        DonorDatabase = () => {
            firebase.database().ref("donor/0001").set({
                TextInput_DonorName: this.state.TextInput_DonorName,
                TextInput_DonorNumber: this.state.TextInput_DonorNumber,
                TextInput_DonorAge: this.state.TextInput_DonorAge,
                TextInput_DonorCity: this.state.TextInput_DonorCity,
                PickerSelectedVal: this.state.PickerSelectedVal,
            }).then(() => {
                console.log('Inserted')
            }
            ).catch((error) => {
                console.log(error)

            });
        }
    }


    constructor(props) {

        super(props)

        this.state = {

            TextInput_DonorName: '',
            TextInput_DonorNumber: '',
            TextInput_DonorAge: '',
            TextInput_DonorCity: '',
            PickerSelectedVal: '',
            // image:''
        }


    }
    // ConsoleValues = () => {
    //     console.log("Submit button pressed")
    //     console.log(this.state.TextInput_DonorName)
    //     console.log(this.state.TextInput_DonorNumber)
    //     console.log(this.state.TextInput_DonorAge)
    //     console.log(this.state.TextInput_DonorCity)
    //     console.log(this.state.PickerSelectedVal)
    //     // console.log(this.state.image);

    // }

    // Send_Data_Function = () => {

    //     this.props.navigation.navigate('***', {
    //         DonorNameOBJ: this.state.TextInput_DonorName,
    //         DonorNumberOBJ: this.state.TextInput_DonorNumber,
    //         DonorAgeOBJ: this.state.TextInput_DonorAge,
    //         DonorCityOBJ: this.state.TextInput_DonorCity,
    //         DonorBGroupOBJ: this.state.BloodGroup,
    //         // image: this.state.image

    //     });


    // }
    render() {
        let { image } = this.state;

        return (
            <View style={styles.MainContainer} >
                <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "bold" }}>DONOR FORM</Text>
                <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>

                    {image &&
                        <Image source={{ uri: image }}
                            style={{
                                borderWidth: 1,
                                borderColor: 'rgba(0,0,0,0.2)',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 75,
                                height: 75,
                                backgroundColor: '#fff',
                                borderRadius: 32.5,
                            }}
                        />}

                    <TextInput
                        placeholderTextColor="black"

                        placeholder="Donor Name"
                        onChangeText={data => this.setState({ TextInput_DonorName: data })}
                        style={styles.textInputStyle}
                        underlineColorAndroid='transparent'
                    />

                    <TextInput
                        placeholderTextColor="black"

                        placeholder="Mobile Number"
                        onChangeText={data => this.setState({ TextInput_DonorNumber: data })}
                        style={styles.textInputStyle}
                        keyboardType={'numeric'}
                        underlineColorAndroid='transparent'
                    />

                    <TextInput
                        placeholderTextColor="black"

                        placeholder="Age"
                        onChangeText={data => this.setState({ TextInput_DonorAge: data })}
                        style={styles.textInputStyle}
                        keyboardType={'numeric'}
                        underlineColorAndroid='transparent'
                    />

                    <TextInput
                        placeholderTextColor="black"

                        placeholder="City"
                        onChangeText={data => this.setState({ TextInput_DonorCity: data })}
                        style={styles.textInputStyle}
                        underlineColorAndroid='transparent'
                    />

                    <View style={{ width: 180, marginTop: 0 }}>
                        <Picker
                            selectedValue={this.state.PickerSelectedVal}
                            onValueChange={(itemValue, itemIndex) => this.setState({ PickerSelectedVal: itemValue })} >

                            <Picker.Item label="Blood Group" value="null" />
                            <Picker.Item label="O+" value="O+" />
                            <Picker.Item label="O-" value="O-" />
                            <Picker.Item label="A+" value="A+" />
                            <Picker.Item label="A-" value="A-" />
                            <Picker.Item label="B+" value="B+" />
                            <Picker.Item label="B-" value="B-" />
                            <Picker.Item label="AB+" value="AB+" />
                            <Picker.Item label="AB-" value="AB-" />

                        </Picker>

                        <TouchableOpacity onPress={this.getSelectedPickerValue} style={{ textAlign: 'center', alignItems: 'center', alignContent: 'center' }}></TouchableOpacity>
                    </View>


                    <Text style={{ color: 'black', fontSize: 10, marginTop: 0 }}>Profile Picture</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{ marginTop: 7 }}
                            onPress={this._pickImage}
                        >
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={require('../assets/CameraRoll.png')}
                            />
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={{ marginTop: 10, marginLeft: 20 }}
                            onPress={() =>
                                this.props.navigation.navigate('Page2')
                            }
                        >
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={require('../assets/Camera.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    {/* <View flexDirection='row'>

                        <TouchableOpacity
                            // onPress={this.Send_Data_Function}
                            onPress={DonorDatabase()}
                            onPress={() =>
                                this.props.navigation.navigate('BloodBank')
                            } activeOpacity={0.7} style={styles.button} >

                            <Text style={styles.buttonText}>SUBMIT</Text>

                        </TouchableOpacity>


                    </View> */}
                    <View flexDirection='row'>
                        <TouchableOpacity
                           onPress={() =>
                                this.props.navigation.navigate('Page')
                            } activeOpacity={0.7} style={styles.button} >

                            <Text style={styles.buttonText}>CANCEL</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                        // onPress={this.Send_Data_Function}
                            onPress={DonorDatabase()}
                            onPress={() =>
                                this.props.navigation.navigate('BloodBank')
                            }
                            activeOpacity={0.7} style={styles.button} >

                            <Text style={styles.buttonText}>SIGNUP</Text>

                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        );
    }


    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(JSON.stringify(result));

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };
}



const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 11

    },

    // button: {
    //     alignItems: 'center',
    //     backgroundColor: 'black',
    //     padding: 12,
    //     width: 280,
    //     marginTop: 12,
    // },
    button: {
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10,
        width: 140,
        marginTop: 12,
        marginHorizontal: 10

    },

    text: {

        color: '#fff'
    },
    textInputStyle: {

        height: 30,
        width: 250,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        marginTop: 10
    },
    // buttonText: {
    //     color: 'white',
    //     textAlign: 'center',
    //     fontSize: 15
    // },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12
    },
    textStyle: {

        color: '#000',
        textAlign: 'center',
        fontSize: 20

    }
});











