import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'

const SignUp = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <Image
                style={{ width: '60%', height: '10%', alignSelf: 'center', marginTop: 70 }}
                source={require('./src/assets/images/insta2.png')}
            />
            <Text style={{ color: '#5e5e5e', fontSize: 16, fontWeight: 'bold' }}>{'Sign up to see photos and videos'}</Text>
            <Text style={{ color: '#5e5e5e', fontSize: 16, fontWeight: 'bold' }}>{'from your friends.'}</Text>
            <TouchableOpacity onPress={() => { }} style={styles.loginBt}>
                <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>
                    {'Log In with Facebook'}
                </Text>
            </TouchableOpacity>
            <Text style={{ color: '#5e5e5e', fontWeight: 'bold', margin: 26 }}>{'⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯     OR     ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯'}</Text>
            <TextInput style={styles.inputBar}
                onChangeText={(txt) => {
                    validateFormat(txt)
                    setMail(txt)
                }}
                placeholder='Mobile number or Email' placeholderTextColor='#5e5e5e' />
            <TextInput style={styles.inputBar}
                onChangeText={(txt) => {
                    validateFormat(txt)
                    setMail(txt)
                }}
                placeholder='Full Name' placeholderTextColor='#5e5e5e' />
            <TextInput style={styles.inputBar}
                onChangeText={(txt) => {
                    validateFormat(txt)
                    setMail(txt)
                }}
                placeholder='Username' placeholderTextColor='#5e5e5e' />
            <TextInput style={styles.inputBar}
                onChangeText={(txt) => {
                    validateFormat(txt)
                    setMail(txt)
                }}
                placeholder='Password' placeholderTextColor='#5e5e5e' />
            <TouchableOpacity onPress={() => { }} style={{ ...styles.loginBt, marginTop: 14 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>
                    {'Sign Up'}
                </Text>
            </TouchableOpacity>
            <Text style={{ color: '#5e5e5e', marginTop: 12 }}>
                {"By signing up, you agree to our "}<Text style={{ fontWeight: '700' }}>{'Terms , Data'}</Text>
            </Text>
            <Text style={{ color: '#5e5e5e', marginTop: 2, fontWeight: '700' }}>{"Policy and Cookies Policy ."}</Text>
            <Text style={{ color: '#5e5e5e', marginTop: 6 }}>
                {"Have an account?  "}<Text onPress={() => { navigation.navigate('InstaLogin') }} style={{ color: '#3797f1' }}>{'Log in'}</Text>
            </Text>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center'
    },
    inputBar: {
        backgroundColor: '#111111',
        flexDirection: 'row',
        borderWidth: 1,
        width: '90%',
        height: '5%',
        marginHorizontal: 18,
        paddingHorizontal: 8,
        marginVertical: 6,
        color: 'white',
        borderRadius: 6,
        letterSpacing: 0.4
    },
    loginBt: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 26,
        backgroundColor: '#3797f1',
        width: '90%',
        height: 40,
        alignSelf: 'center',
        borderRadius: 6
    },
})
