import { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React from 'react';
import RNPasswordStrengthMeter, {
    TextPasswordStrengthDisplay,
} from 'react-native-password-strength-meter';


const App = () => {
    const [name, setName] = useState('')
    const [pass, setPass] = useState('');
    const [showPass, setShowPass] = useState(true);
    const [col2, setCol2] = useState('grey');
    const [dynTxt, setDynTxt] = useState('');
    const [dynTxt2, setDynTxt2] = useState('');
    const [Valid, setValid] = useState('');
    const [showRePass, setShowRePass] = useState(true)

    const checkName = () => {
        return (name === '')
    }

    const validateFormat = (txt) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        return (reg.test(txt))
    }

    const confirmPass = (txt) => {
        if (txt === pass) {
            console.log("true hua")
            return true
        }
        else return false;
    }

    return (

        <ScrollView style={styles.main}>

            <Image style={styles.bgImage} source={require('./src/assets/icLoginBg_2022-03-24/icLoginBg.png')} />
            <Text style={styles.loginBadge}>{'Register'}</Text>
            <Text style={styles.lgnTxt}>{'Enter your details to continue'}</Text>
            <View style={{ bottom: 60 }}>
                <View style={styles.inputView}>
                    <Text>{'Name'}</Text>
                    <TextInput style={styles.inputBar} onBlur={(txt) => {
                        setName(txt.nativeEvent.text);
                        checkName() ? setDynTxt2('Name can not be empty') : setDynTxt2('')
                    }} placeholder="Prakhar Tripathi" />

                </View>
                <Text style={{ left: 20, color: 'grey' }}>{dynTxt2}</Text>
                <View style={styles.inputView}>
                    <Text>{'Email'}</Text>
                    <TextInput
                        onBlur={(e) => { validateFormat(e.nativeEvent.text) ? setValid("") : setValid("Invalid Format") }}
                        style={styles.inputBar}
                        placeholder="email"></TextInput>
                </View>
                <Text style={{ left: 20, color: 'grey' }}>{Valid}</Text>
                <View style={styles.inputView}>
                    <Text>{'Password'}</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <TextInput style={{ ...styles.inputBar, height: '100%' }} onChangeText={(txt) => { setPass(txt) }}
                            secureTextEntry={showPass}
                            textContentType='password'
                            placeholder="password"></TextInput>
                        <TextPasswordStrengthDisplay
                            password={pass}
                        />
                        <TouchableOpacity onPress={() => { showPass ? setShowPass(false) : setShowPass(true) }}>
                            <Image style={{ alignSelf: 'flex-end', right: 29 }} source={require('/Users/admin/Desktop/ReactNative/TrainingProject/src/assets/icVisible_2022-03-24/icVisible.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.inputView}>
                    <Text>{'Confirm Password'}</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <TextInput style={{ ...styles.inputBar, height: '100%' }}
                            onBlur={(e) => {
                                confirmPass(e.nativeEvent.text) ? setDynTxt("") : setDynTxt('Password did not match')
                            }}
                            secureTextEntry={showRePass}
                            textContentType='password'
                            placeholder="password"></TextInput>
                        <TouchableOpacity onPress={() => { showRePass ? setShowRePass(false) : setShowRePass(true) }}>
                            <Image style={{ alignSelf: 'flex-end', right: 9 }} source={require('/Users/admin/Desktop/ReactNative/TrainingProject/src/assets/icVisible_2022-03-24/icVisible.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ left: 20, color: 'red' }}>{dynTxt}</Text>
                <View style={{ marginTop: 2, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => {

                        col2 === 'grey' ? setCol2('green') : setCol2('grey')
                    }}>
                        <Image source={require('/Users/admin/Desktop/ReactNative/TrainingProject/src/assets/icCheck_2022-03-24/icCheck.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: col2 }}>{'    Agree to terms of Service & Privacy Policy'}</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    if (Valid === '' && col2 === 'green' && dynTxt == "" && name != '')
                        Alert.alert('Registered');
                    else Alert.alert('Invalid Details')
                }}>
                    <View style={styles.loginBt}>
                        <Text style={{ fontWeight: '700' }}>{'REGISTER'}</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ top: 28, alignItems: 'center' }}>
                    <Text style={{ color: 'grey' }}>
                        {'Already have an account?'}<Text onPress={() => { }} style={{ fontWeight: 'bold', color: 'black' }}>{' Login'}</Text>
                    </Text>
                </View>
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingVertical: 40,
        paddingLeft: 30,
    },
    bgImage: {
        bottom: 38,
        width: '100%',
        height: '30%'
    },
    loginBadge: {
        bottom: 50,
        fontSize: 30,
        fontWeight: 'bold'
    },
    lgnTxt: {
        bottom: 55,
        color: 'grey',
        marginVertical: 10,
    },
    inputView: {
        justifyContent: 'center',
        borderWidth: 1,
        paddingLeft: 14,
        borderColor: 'lightgrey',
        margin: 8,
        height: '12%',
        width: '90%'
    },
    inputBar: {
        borderColor: 'white',
        flexDirection: 'row',
        borderWidth: 1,
        width: '90%',
        height: '40%'
    },
    forgotTxt: {
        color: 'grey',
        fontSize: 16,
        alignSelf: 'flex-end',
        right: 35,

    },
    loginBt: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40, backgroundColor: '#daa520',
        width: '90%',
        height: 40
    }



})
export default App;

