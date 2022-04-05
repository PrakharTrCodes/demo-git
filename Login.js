import { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react';

const App = ({navigation}) => {
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [showPass, setShowPass] = useState(true);
    const [txt, setTxt] = useState('')

    const validateFormat = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        return (reg.test(mail))
    }

    const validate = () => {
        if (mail.toLowerCase() === 'archanaprakhar30@gmail.com' && pass === 'Abc@3011#')
            return true;
        else return false;
    }

    return (
            <View style={styles.main}>

                <Image style={styles.bgImage} source={require('./src/assets/icLoginBg_2022-03-24/icLoginBg.png')} />
                <Text style={styles.loginBadge}>{'Login'}</Text>
                <Text style={styles.lgnTxt}>{'Enter your details to continue'}</Text>
                <View>
                    <View style={styles.inputView}>
                        <Text>{'Email'}</Text>
                        <TextInput style={styles.inputBar}
                            onChangeText={(txt) => { setMail(txt) }}
                            onBlur={() => { validateFormat() ? setTxt('') : setTxt('Invalid Format') }}
                            placeholder="sample123@email.com" />

                    </View>
                    <Text style={styles.myTxt}>{txt}</Text>

                    <View style={styles.inputView}>
                        <Text>{'Password'}</Text>
                        <View style={{ flexDirection: 'row' }}>

                            <TextInput style={{ ...styles.inputBar, height: '100%' }} onChangeText={(txt) => { setPass(txt) }}
                                secureTextEntry={showPass}
                                textContentType='password'
                                placeholder="password"></TextInput>
                            <TouchableOpacity onPress={() => { showPass ? setShowPass(false) : setShowPass(true) }}>
                                <Image style={{ alignSelf: 'flex-end', right: 9 }} source={require('/Users/admin/Desktop/ReactNative/TrainingProject/src/assets/icVisible_2022-03-24/icVisible.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, padding: 8 }}>

                        <Text onPress={() => { mail.toLowerCase() === 'archanaprakhar30@gmail.com' ? Alert.alert('pass: 123') : Alert.alert('Wrong Email') }} style={styles.forgotTxt}>
                            {'Forgot Password ?'}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => { validate() ? Alert.alert('Logged in') : Alert.alert('Invalid Credentials') }}>
                        <View style={styles.loginBt}>
                            <Text style={{ fontWeight: '700' }}>{'LOGIN'}</Text>
                        </View>

                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text>{'Not yet Registered?'}<Text 
                    onPress={()=>{navigation.navigate('Register')}}
                    style={{ fontWeight: 'bold' }}>{' Register here'}</Text></Text>
                </View>
            </View>

    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 30,
    },
    bgImage: {
        width: '100%',
        height: '30%'
    },
    loginBadge: {
        bottom: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    lgnTxt: {
        bottom: 30,
        color: 'grey',
        marginVertical: 10,
    },
    inputView: {
        justifyContent: 'center',
        borderWidth: 1,
        paddingLeft: 14,
        borderColor: 'lightgrey',
        margin: 8,
        height: '16%',
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
    },
    myTxt: {
        left: 20,
        color: 'grey'
    }



})
export default App;

