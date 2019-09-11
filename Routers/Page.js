
// HOME
import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Page extends React.Component {
    render() {
        return (
            <View style={styles.container}>


                <Text style={{ fontSize: 20, color: '#121149', fontWeight: "bold", marginTop: -100 }}>BLOOD BANK DASHBOARD</Text>
                <View style={{ flexDirection: "row" }}>

                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('DonorForm')
                        }
                    >
                        <Image
                            style={styles.image}

                            source={require('./assets/DonateBlood.png')}
                        />
                        <Text style={styles.textCaptiopn}>Donate Blood</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('BloodBank')
                        }
                    >
                        <Image
                            style={styles.image}

                            source={require('./assets/BloodBank.png')}
                        />
                        <Text style={styles.textCaptiopn}>Blood Bank</Text>

                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: "row" }}>

                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate("ViewProfile")
                        }
                    >
                        <Image
                            style={styles.image}

                            source={require('./assets/userlogin.png')}
                        />
                        <Text style={styles.textCaptiopn}>View Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            // this.props.navigation.navigate('HelpDesk')
                            Linking.openURL('https://bot.dialogflow.com/44f230c3-a34b-4a7c-91f7-fe69c4cc3280 ')
                        }
                    >
                        <Image
                            style={styles.image}
                            source={require('./assets/HelpDesk3.png')}
                        />
                        <Text style={styles.textCaptiopn}>Help Desk</Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        paddingHorizontal: 120,
    },
    image: {
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 50,
        marginTop: 40,
        marginHorizontal: 20,

    },
    textCaptiopn: {
        marginHorizontal: 10,
        color: '#121149',
        textAlign: 'center'
    }

});
