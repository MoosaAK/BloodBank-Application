
// /*ADD STUDENT*/
// // Discription of Page1.js
// // {Page1 > Import picture from camera roll + textInput > Add Student Profile }


// import * as React from 'react';
// import { Button, StyleSheet, Image, Text, TextInput, View } from 'react-native';
// // import {Permissions} from 'expo'
// import * as ImagePicker from "expo-image-picker"
// import * as Permissions from 'expo-permissions';
// import Constants from "expo-constants"
// import { TouchableOpacity } from 'react-native-gesture-handler';

// export default class Page1 extends React.Component {
//     state = {
//         image: null,
//     };


//     constructor(props) {

//         super(props)

//         this.state = {

//             TextInput_Name: '',

//             TextInput_Number: ''

//         }

//     }

//     Send_Data_Function = () => {

//         this.props.navigation.navigate('Page3', {
//             NameOBJ: this.state.TextInput_Name,
//             NumberOBJ: this.state.TextInput_Number,
//             ClassOBJ: this.state.TextInput_Class

//         });
//         console.log("Submit button pressed")
//         console.log(this.state.TextInput_Name)
//         console.log(this.state.TextInput_Number)
//         console.log(this.state.TextInput_Class)

//     }
//     render() {
//         let { image } = this.state;

//         return (
//             <View style={styles.MainContainer} >
//                 <Text style={{ marginTop: 5, fontSize: 20, fontWeight: "bold" }}>ADD STUDENT PROFILE</Text>
//                 <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>

//                     {image &&
//                         <Image source={{ uri: image }}
//                             style={{
//                                 borderWidth: 1,
//                                 borderColor: 'rgba(0,0,0,0.2)',
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 width: 75,
//                                 height: 75,
//                                 backgroundColor: '#fff',
//                                 borderRadius: 37.5,
//                             }}
//                         />}

//                     <TextInput
//                         placeholder="Enter Student Name Here"
//                         onChangeText={data => this.setState({ TextInput_Name: data })}
//                         style={styles.textInputStyle}
//                         underlineColorAndroid='transparent'
//                     />

//                     <TextInput
//                         placeholder="Enter Id Number Here"
//                         onChangeText={data => this.setState({ TextInput_Number: data })}
//                         style={styles.textInputStyle}
//                         keyboardType={'numeric'}
//                         underlineColorAndroid='transparent'
//                     />

//                     <TextInput
//                         placeholder="Enter Class Here"
//                         onChangeText={data => this.setState({ TextInput_Class: data })}
//                         style={styles.textInputStyle}
//                         underlineColorAndroid='transparent'
//                     />

//                     <Text style={{ color: 'black', fontSize: 15, marginTop: 20 }}>Select Profile Picture</Text>
//                     <View style={{ flexDirection: 'row' }}>
//                         <TouchableOpacity
//                             style={{ marginTop: 10 }}
//                             onPress={this._pickImage}
//                         >
//                             {/* <Text style={{ color: 'black' }}>
//                             Camera roll
//                     </Text> */}
//                             <Image
//                                 style={{ width: 50, height: 50 }}
//                                 source={require('./assets/CameraRoll.png')}
//                             />
//                         </TouchableOpacity>


//                         <TouchableOpacity
//                             style={{ marginTop: 10, marginLeft: 20 }}
//                             onPress={() =>
//                                 this.props.navigation.navigate('Page2')
//                             }
//                         >
//                             {/* <Text style={{ color: 'black' }}>
//                             Camera
//                     </Text> */}
//                             <Image
//                                 style={{ width: 50, height: 50 }}
//                                 source={require('./assets/Camera.png')}
//                             />
//                         </TouchableOpacity>
//                     </View>
//                     <TouchableOpacity onPress={this.Send_Data_Function} onPress={() =>
//                         this.props.navigation.navigate('Page3')
//                     } activeOpacity={0.7} style={styles.button} >

//                         <Text style={styles.buttonText}>SUBMIT</Text>

//                     </TouchableOpacity>
//                 </View>

//             </View>
//         );
//     }


//     componentDidMount() {
//         this.getPermissionAsync();
//     }

//     getPermissionAsync = async () => {
//         if (Constants.platform.ios) {
//             const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//             if (status !== 'granted') {
//                 alert('Sorry, we need camera roll permissions to make this work!');
//             }
//         }
//     }

//     _pickImage = async () => {
//         let result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.All,
//             allowsEditing: true,
//             aspect: [4, 3],
//         });

//         console.log(result);

//         if (!result.cancelled) {
//             this.setState({ image: result.uri });
//         }
//     };
// }



// const styles = StyleSheet.create({

//     MainContainer: {

//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'white',
//         padding: 11

//     },

//     button: {
//         alignItems: 'center',
//         backgroundColor: 'gray',
//         padding: 12,
//         width: 280,
//         marginTop: 12,
//     },

//     text: {

//         color: '#fff'
//     },
//     textInputStyle: {

//         height: 40,
//         width: 250,
//         textAlign: 'center',
//         borderWidth: 1,
//         borderColor: 'gray',
//         borderRadius: 8,
//         marginTop: 15
//     },
//     buttonText: {
//         color: 'black',
//         textAlign: 'center',
//     },
//     textStyle: {

//         color: '#000',
//         textAlign: 'center',
//         fontSize: 20

//     }
// });









