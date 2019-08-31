
import * as React from 'react';
import * as firebase from "firebase"
import fire from '..//Action/Action'
import { Button, StyleSheet, Image, Text, TextInput, View } from 'react-native';
// import {Permissions} from 'expo'
import * as ImagePicker from "expo-image-picker"
import * as Permissions from 'expo-permissions';
import Constants from "expo-constants"
import { TouchableOpacity } from 'react-native-gesture-handler';






export default class Signup extends React.Component {

    state = {
        image: null,
        email: '',
        password: '',
        errorMessage: null
    };

    handleSignUp = () => {
        const { email, password } = this.state
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => this.props.navigation.navigate('Page'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }


    render() {
        let { image } = this.state;

        return (
            <View style={styles.MainContainer} >
                <Text style={{ marginTop: 5, fontSize: 18, fontWeight: "bold" }}>CREATE A NEW ACCOUNT</Text>
                <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>

                     {this.state.errorMessage &&
                        <Text style={{ color: '#800000',alignContent:'center',fontSize:10,textAlign:'center' }}>
                            {this.state.errorMessage}
                        </Text>}
                    {image &&
                        <Image source={{ uri: image }}
                            style={{
                                borderWidth: 1,
                                borderColor: 'rgba(0,0,0,0.2)',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 80,
                                height: 80,
                                backgroundColor: '#fff',
                                borderRadius: 40,
                            }}
                        />}

                    <TextInput
                        placeholderTextColor="black"
                        placeholder="Email Address"
                        autoCapitalize="none"
                        style={styles.textInputStyle}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />

                    <TextInput
                        secureTextEntry
                        placeholderTextColor="black"
                        placeholder="Password"
                        autoCapitalize="none"
                        value={this.state.password}
                        style={styles.textInputStyle}
                        onChangeText={password => this.setState({ password })}

                    />

                    <Text style={{ color: 'black', fontSize: 10, marginTop: 20 }}>Select Profile Picture</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{ marginTop: 10 }}
                            onPress={this._pickImage}
                        >
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={require('./assets/CameraRoll.png')}
                            />
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={{ marginTop: 10, marginLeft: 20 }}
                            onPress={() =>
                                this.props.navigation.navigate('Camera')
                            }
                        >
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={require('./assets/Camera.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View flexDirection='row'>
                        <TouchableOpacity
                           onPress={() =>
                                this.props.navigation.navigate('Login')
                            } activeOpacity={0.7} style={styles.button} >

                            <Text style={styles.buttonText}>SIGN IN INSTEAD</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={this.handleSignUp}
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

        console.log(result);

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
        backgroundColor: '#69c2bb',
        padding: 11

    },

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

        height: 37,
        width: 250,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        marginTop: 15
    },
    buttonText: {
        color: '#69c2bb',
        textAlign: 'center',
        fontSize: 11
    },
    textStyle: {

        color: '#000',
        textAlign: 'center',
        fontSize: 20

    }
});











