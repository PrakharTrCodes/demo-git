import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, Pressable, Alert, TouchableOpacity } from 'react-native';

export default class Today extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    amount = 209.05

    render() {
        return (
            <View style={styles.parent}>
                <View style={styles.head}>
                    <Text style={{ fontSize: 30, }}>←</Text>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{'          '}Select Payment</Text>
                </View>
                <View style={styles.amount}>
                    <Text>{"Total"}</Text>
                    <Text style={{ fontSize: 35 }}>{'₹'}{this.amount}</Text>
                </View>
                <View style={styles.innerparent}>



                    <View style={styles.upperView}>
                        <View style={styles.cards}>
                            <Image style={styles.img} source={require('/Users/admin/Desktop/ReactNative/TrainingProject/src/assets/images/creedit.jpeg')} />
                            <Pressable onPress={() => { Alert.alert("Credit") }}>
                                <Text style={{ fontSize: 20 }}>
                                    {'Credit'}
                                </Text>
                            </Pressable>
                        </View>
                        <View style={styles.cards}>
                            <Image style={styles.img} source={require('/Users/admin/Desktop/ReactNative/TrainingProject/src/assets/images/cardwithmachine.webp')} />
                            <TouchableOpacity onPress={() => { Alert.alert("External Terminal") }}>
                                <Text style={{ fontSize: 20, }}>
                                    {'External Terminal'}
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>


                    <View style={{ flexDirection: 'row', height: '50%' }}>
                        <View style={styles.cards}>
                            <Image resizeMode='contain' style={styles.img} source={require('/Users/admin/Desktop/ReactNative/TrainingProject/src/assets/images/note.webp')} />
                            <Pressable onPressOut={() => { Alert.alert("Cash") }}>
                                <Text style={{ fontSize: 20 }}>
                                    {'Cash'}
                                </Text>
                            </Pressable>
                        </View>
                        <View style={styles.cards}>
                            <Image style={styles.img} source={require('/Users/admin/Desktop/ReactNative/TrainingProject/src/assets/images/giftCard.webp')} />
                            <Pressable onLongPress={() => { Alert.alert('Gift Card') }}>
                                <Text style={{ fontSize: 20 }}>
                                    {'Gifft Card'}
                                </Text>
                            </Pressable>
                        </View>
                    </View>


                </View>





            </View>






        );
    }
}


const styles = {
    img: {
        height: 50,
        width: 50
    },
    head: {
        paddingTop: 35,
        width: '100%',
        height: '10%',
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.88,
        shadowRadius: 9.51,

        elevation: 15,
    },
    cards: {
        flex: 1,
        margin: 10,
        height: '55%',
        width: '45%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,

        },
        shadowOpacity: 0.85,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 2,
        backgroundColor: '#fffafa',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    amount: {
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        backgroundColor: '#dcdcdc',
        shadowOffset: {
            width: 0,
            height: 2,

        },
        shadowOpacity: 0.85,
        shadowRadius: 3.84,
        elevation: 5,
    },
    upperView: {
        flexDirection: 'row',
        height: '50%',

        justifyContent: 'center',
        alignItems: 'center'
    },
    parent: {
        backgroundColor: '#dcdcdc',
        flex: 1
    },
    innerparent: {
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '60%',
        backgroundColor: '#dcdcdc'
    }
}

