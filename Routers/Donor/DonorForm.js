
// import * as React from 'react';
// import * as firebase from "firebase"
// import Action from '..//Action/Action'

// import { Button, StyleSheet, Image, Text, TextInput, Picker, View } from 'react-native';
// // import {Permissions} from 'expo'
// import * as ImagePicker from "expo-image-picker"
// import * as Permissions from 'expo-permissions';
// import Constants from "expo-constants"
// import { TouchableOpacity } from 'react-native-gesture-handler';


// export default class DonorForm extends React.Component {
//     state = {
//         image: null,
//     };


//     componentWillMount() {

//         firebase.database().ref('DonorForm').on('value', (data) => {
//             console.log(data.toJSON())
//         })

//         DonorDatabase = () => {
//             firebase.database().ref("donor/0001").set({
//                 TextInput_DonorName: this.state.TextInput_DonorName,
//                 TextInput_DonorNumber: this.state.TextInput_DonorNumber,
//                 TextInput_DonorAge: this.state.TextInput_DonorAge,
//                 TextInput_DonorCity: this.state.TextInput_DonorCity,
//                 PickerSelectedVal: this.state.PickerSelectedVal,
//             }).then(() => {
//                 console.log('Inserted')
//             }
//             ).catch((error) => {
//                 console.log(error)

//             });
//         }
//     }


//     constructor(props) {

//         super(props)

//         this.state = {

//             TextInput_DonorName: '',
//             TextInput_DonorNumber: '',
//             TextInput_DonorAge: '',
//             TextInput_DonorCity: '',
//             PickerSelectedVal: '',
//             // image:''
//         }


//     }
//     // ConsoleValues = () => {
//     //     console.log("Submit button pressed")
//     //     console.log(this.state.TextInput_DonorName)
//     //     console.log(this.state.TextInput_DonorNumber)
//     //     console.log(this.state.TextInput_DonorAge)
//     //     console.log(this.state.TextInput_DonorCity)
//     //     console.log(this.state.PickerSelectedVal)
//     //     // console.log(this.state.image);

//     // }

//     // Send_Data_Function = () => {

//     //     this.props.navigation.navigate('***', {
//     //         DonorNameOBJ: this.state.TextInput_DonorName,
//     //         DonorNumberOBJ: this.state.TextInput_DonorNumber,
//     //         DonorAgeOBJ: this.state.TextInput_DonorAge,
//     //         DonorCityOBJ: this.state.TextInput_DonorCity,
//     //         DonorBGroupOBJ: this.state.BloodGroup,
//     //         // image: this.state.image

//     //     });


//     // }
//     render() {
//         let { image } = this.state;

//         return (
//             <View style={styles.MainContainer} >
//                 <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "bold" }}>DONOR FORM</Text>
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
//                                 borderRadius: 32.5,
//                             }}
//                         />}

//                     <TextInput
//                         placeholderTextColor="black"

//                         placeholder="Donor Name"
//                         onChangeText={data => this.setState({ TextInput_DonorName: data })}
//                         style={styles.textInputStyle}
//                         underlineColorAndroid='transparent'
//                     />

//                     <TextInput
//                         placeholderTextColor="black"

//                         placeholder="Mobile Number"
//                         onChangeText={data => this.setState({ TextInput_DonorNumber: data })}
//                         style={styles.textInputStyle}
//                         keyboardType={'numeric'}
//                         underlineColorAndroid='transparent'
//                     />

//                     <TextInput
//                         placeholderTextColor="black"

//                         placeholder="Age"
//                         onChangeText={data => this.setState({ TextInput_DonorAge: data })}
//                         style={styles.textInputStyle}
//                         keyboardType={'numeric'}
//                         underlineColorAndroid='transparent'
//                     />

//                     <TextInput
//                         placeholderTextColor="black"

//                         placeholder="City"
//                         onChangeText={data => this.setState({ TextInput_DonorCity: data })}
//                         style={styles.textInputStyle}
//                         underlineColorAndroid='transparent'
//                     />

//                     <View style={{ width: 180, marginTop: 0 }}>
//                         <Picker
//                             selectedValue={this.state.PickerSelectedVal}
//                             onValueChange={(itemValue, itemIndex) => this.setState({ PickerSelectedVal: itemValue })} >

//                             <Picker.Item label="Blood Group" value="null" />
//                             <Picker.Item label="O+" value="O+" />
//                             <Picker.Item label="O-" value="O-" />
//                             <Picker.Item label="A+" value="A+" />
//                             <Picker.Item label="A-" value="A-" />
//                             <Picker.Item label="B+" value="B+" />
//                             <Picker.Item label="B-" value="B-" />
//                             <Picker.Item label="AB+" value="AB+" />
//                             <Picker.Item label="AB-" value="AB-" />

//                         </Picker>

//                         <TouchableOpacity onPress={this.getSelectedPickerValue} style={{ textAlign: 'center', alignItems: 'center', alignContent: 'center' }}></TouchableOpacity>
//                     </View>


//                     <Text style={{ color: 'black', fontSize: 10, marginTop: 0 }}>Profile Picture</Text>
//                     <View style={{ flexDirection: 'row' }}>
//                         <TouchableOpacity
//                             style={{ marginTop: 7 }}
//                             onPress={this._pickImage}
//                         >
//                             <Image
//                                 style={{ width: 50, height: 50 }}
//                                 source={require('../assets/CameraRoll.png')}
//                             />
//                         </TouchableOpacity>


//                         <TouchableOpacity
//                             style={{ marginTop: 10, marginLeft: 20 }}
//                             onPress={() =>
//                                 this.props.navigation.navigate('Page2')
//                             }
//                         >
//                             <Image
//                                 style={{ width: 50, height: 50 }}
//                                 source={require('../assets/Camera.png')}
//                             />
//                         </TouchableOpacity>
//                     </View>
//                     <View flexDirection='row'>

//                         <TouchableOpacity
//                             // onPress={this.Send_Data_Function}
//                             onPress={DonorDatabase()}
//                             onPress={() =>
//                                 this.props.navigation.navigate('BloodBank')
//                             } activeOpacity={0.7} style={styles.button} >

//                             <Text style={styles.buttonText}>SUBMIT</Text>

//                         </TouchableOpacity>


//                     </View>
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

//         console.log(JSON.stringify(result));

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
//         backgroundColor: 'black',
//         padding: 12,
//         width: 280,
//         marginTop: 12,
//     },

//     text: {

//         color: '#fff'
//     },
//     textInputStyle: {

//         height: 30,
//         width: 250,
//         textAlign: 'center',
//         borderWidth: 1,
//         borderColor: 'gray',
//         borderRadius: 8,
//         marginTop: 10
//     },
//     buttonText: {
//         color: 'white',
//         textAlign: 'center',
//         fontSize: 15
//     },
//     textStyle: {

//         color: '#000',
//         textAlign: 'center',
//         fontSize: 20

//     }
// });














// // import React, { Component } from "react";
// // import { TouchableOpacity, StyleSheet, Alert, Picker } from 'react-native';
// // import { Container, View, Header, Content, Text, Left, Right, Body, Title, Item, Input, Button, List, ListItem, } from "native-base";
// // // import Communications from 'react-native-communications';

// // export default class DonorForm extends Component {      


// //     constructor(props) {
// //       super(props);
// //       this.state = {
// //         isSubmited: false,
// //         name: '',
// //         mobile: '',
// //         group: '',
// //         donors: [],
// //         grouptoBeFiltered: '',
// //       };
// //     }

// //     // async componentDidMount() {
// //     //     await Font.loadAsync({
// //     //       'Roboto': require('native-base/Fonts/Roboto.ttf'),
// //     //       'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
// //     //       ...Ionicons.font,
// //     //     })
// //     //     this.setState({ loading: false })
// //     //   }


// //     componentDidMount() {
// //       this.timer = setInterval(() => this.getDonor(), 1000);
// //     }

// //     async getDonor() {
// //       return fetch(`https://blood-donors-db.firebaseio.com/donors.json`)
// //         .then((response) => response.json())
// //         .then((responseJson) => {
// //           this.setState({
// //             donors: Object.values(responseJson),
// //           });
// //         })
// //         .catch((error) => {
// //           console.error(error);
// //         });
// //     }


// //     addDonor = (name, mobile, group) => {
// //       if (this.state.name != null && this.state.mobile != null && this.state.group != null) {
// //         fetch('https://blood-donors-db.firebaseio.com/donors.json', {
// //           method: 'POST',
// //           headers: {
// //             Accept: 'application/json',
// //             'Content-Type': 'application/json',
// //           },
// //           body: JSON.stringify({
// //             "name": name,
// //             "mobile": mobile,
// //             "group": group,
// //             // name: '',
// //             // mobile: '',
// //             // group: '',
// //           }),
// //         })
// //           .then((response) => response.json())
// //           .then((responseData) => {
// //             if (responseData.name != null) {
// //               this.setState({
// //                 name: null,
// //                 mobile: null,
// //                 group: null,
// //                 isSubmited: true,
// //               })
// //             }
// //             else {
// //               Alert.alert(
// //                 'Oops !',
// //                 'Something went wrong',
// //                 [
// //                   { text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
// //                 ],
// //                 { cancelable: false }
// //               )
// //             }

// //           })
// //           .done();
// //       }
// //       else {
// //         Alert.alert(
// //           'Oops !',
// //           'You forgot some field. Please fill it before submitting',
// //           [
// //             { text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
// //           ],
// //           { cancelable: false }
// //         )
// //       }

// //     }

// //     onValueChange(value) {
// //       this.setState({
// //         group: value
// //       });
// //     }


// //     _toggleDonorPost() {
// //       this.setState({
// //         isSubmited: false
// //       })
// //     }


// //     render() {
// //       return (
// //         <Container>

// //           <Header androidStatusBarColor="#af1313" style={{ backgroundColor: '#d11919' }}>
// //             <Body style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
// //               <Title>BLOOD DONORS</Title>
// //             </Body>
// //           </Header>

// //           <Content style={{ marginLeft: 10, marginRight: 10 }}>
// //             <View style={{ backgroundColor: "#f2eded", marginTop: 10 }}>
// //               {this.state.isSubmited
// //                 ?
// //                 <TouchableOpacity onPress={() => this._toggleDonorPost()}>
// //                   <Text style={{ fontSize: 20, color: '#770707', }}>Add more donors</Text>
// //                 </TouchableOpacity>
// //                 :
// //                 <View style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 40 }}>

// //                   <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
// //                     <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#e89494', }}>DONATE YOUR BLOOD</Text>
// //                   </View>

// //                   <Item rounded style={{ marginBottom: 20, marginTop: 20 }}>
// //                     <Input placeholder="Name"
// //                       onChangeText={input => this.setState({ name: input })}
// //                     />
// //                   </Item>

// //                   <Item rounded style={{ marginBottom: 20, marginTop: 20 }}>
// //                     <Input placeholder="Mobile"
// //                       onChangeText={input => this.setState({ mobile: input })}
// //                       keyboardType={"phone-pad"}
// //                     />
// //                   </Item>

// //                   <View style={styles.picker}>
// //                     <Picker
// //                       selectedValue={(this.state.group && this.state.pickerValue) || 'a'}
// //                       onValueChange={this.onValueChange.bind(this)}>
// //                       <Picker.Item label="Blood Group" value="null" />
// //                       <Picker.Item label="A+" value="A+" />
// //                       <Picker.Item label="A-" value="A-" />
// //                       <Picker.Item label="B+" value="B+" />
// //                       <Picker.Item label="B-" value="B-" />
// //                       <Picker.Item label="AB+" value="AB+" />
// //                       <Picker.Item label="AB-" value="AB-" />
// //                       <Picker.Item label="O+" value="O+" />
// //                       <Picker.Item label="O-" value="O-" />
// //                     </Picker>
// //                   </View>

// //                   <Button block light onPress={() => this.addDonor(this.state.name, this.state.mobile, this.state.group)} style={{ marginLeft: 30, marginRight: 30 }}>
// //                     <Text>Add</Text>
// //                   </Button>
// //                 </View>
// //               }
// //             </View>

// //             <View>
// //               <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 10 }}>
// //                 <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#e89494', }}>DONORS</Text>
// //               </View>
// //               <View style={styles.picker}>
// //                 <Picker
// //                   selectedValue={(this.state.grouptoBeFiltered && this.state.pickerValue) || 'a'}
// //                   onValueChange={this.onValueChange.bind(this)}>
// //                   <Picker.Item label="Blood Group" value="null" />
// //                   <Picker.Item label="A+" value="A+" />
// //                   <Picker.Item label="A-" value="A-" />
// //                   <Picker.Item label="B+" value="B+" />
// //                   <Picker.Item label="B-" value="B-" />
// //                   <Picker.Item label="AB+" value="AB+" />
// //                   <Picker.Item label="AB-" value="AB-" />
// //                   <Picker.Item label="O+" value="O+" />
// //                   <Picker.Item label="O-" value="O-" />
// //                 </Picker>
// //               </View>

// //             </View>
// //             {this.state.grouptoBeFiltered == null
// //               ?
// //               null
// //               :
// //               <View>
// //                 {this.state.donors.filter(element => element.group == this.state.grouptoBeFiltered).map((item, index) => (
// //                   <List>
// //                     <ListItem thumbnail>
// //                       <Left>
// //                       </Left>
// //                       <Body>
// //                         <Text>{item.name} ({item.group})</Text>
// //                         <Text note numberOfLines={1}>Mob: {item.mobile}</Text>
// //                       </Body>
// //                       <Right>
// //                         {/* <Button transparent onPress={() => Communications.phonecall(`${item.mobile}`, true)}>
// //                           <Text>Call</Text>
// //                         </Button> */}
// //                       </Right>
// //                     </ListItem>
// //                   </List>
// //                 ))}
// //               </View>
// //             }
// //           </Content>
// //         </Container>
// //       );
// //     }
// //   }
// //   const styles = StyleSheet.create({
// //     picker: {
// //       borderWidth:1,
// //       borderColor: '#848484',
// //       marginLeft: 60,
// //       marginRight: 60,
// //       marginBottom: 10,
// //     }
// //     });
























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











