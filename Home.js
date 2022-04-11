import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native'
import axios from 'axios';
import SearchData from './SearchData';
import { TextInput } from 'react-native-gesture-handler';



export default function Home({ navigation }) {
    let dp = './src/assets/images/myDp.png'
    const [toggle, setToggle] = React.useState(false);


    return (
        <SafeAreaView style={styles.main}>
            <StatusBar barStyle='light-content' />
            <View style={styles.mainHead}>
                <Image
                    style={{ width: 98, height: 24, left: 4 }}
                    source={require('./src/assets/images/insta2.png')}
                />
                <TouchableOpacity>
                    <Image style={{ height: 19, width: 19, left: 230 }} source={require('./src/assets/images/add.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{ height: 19, width: 19, left: 246 }} source={require('./src/assets/images/messenger.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.cardHead}>
                    <Image source={require('./src/assets/images/EmliaDp.jpeg')} style={styles.dp} />
                    <Text style={styles.cardTitle}>{"Emlia Clarke"}</Text>
                    <Image style={styles.option} source={require('./src/assets/images/kebab.png')} />
                </View>
                <View style={styles.postVeiw}>
                    <Image resizeMode='contain' style={{ height: 294, width: '100%' }} source={require('./src/assets/images/emilia.jpeg')} />
                </View>
                <View style={styles.postBottom}>
                    <TouchableOpacity style={styles.like} onPress={() => { setToggle(!toggle) }}>
                        <Image resizeMode='contain' style={{ height: 20, width: 20 }} source={toggle ? require('./src/assets/images/like.png') : require('./src/assets/images/heart.png')} />
                    </TouchableOpacity>
                    <Image style={{ height: 30, width: 30 }} source={require('./src/assets/images/comment.png')} />
                    <Image style={{ height: 18, width: 18 }} source={require('./src/assets/images/send.png')} />
                </View>
                <View style={styles.comments}>
                    <Text style={{ color: 'white' }}>{"Liked by Raj and 356 others"}</Text>
                    <View style={styles.commentsec}>
                        <Image style={{ ...styles.dp, height: 26, width: 26 }} source={require(dp)} />
                        <TextInput placeholderTextColor="white" placeholder='Write a comment' />
                    </View>
                </View>

                <View style={styles.cardHead}>
                    <Image source={require(dp)} style={styles.dp} />
                    <Text style={styles.cardTitle}>{"Prakhar Tripathi"}</Text>
                    <Image style={styles.option} source={require('./src/assets/images/kebab.png')} />
                </View>
                <View style={styles.postVeiw}>
                    <Image source={require('./src/assets/images/spiderman.jpeg')} />
                </View>
                <View style={styles.postBottom}>
                    <TouchableOpacity style={styles.like} onPress={() => { setToggle(!toggle) }}>
                        <Image resizeMode='contain' style={{ height: 20, width: 20 }} source={toggle ? require('./src/assets/images/like.png') : require('./src/assets/images/heart.png')} />
                    </TouchableOpacity>
                    <Image style={{ height: 30, width: 30 }} source={require('./src/assets/images/comment.png')} />
                    <Image style={{ height: 18, width: 18 }} source={require('./src/assets/images/send.png')} />
                </View>
                <View style={styles.comments}>
                    <Text style={{ color: 'white' }}>{"Liked by Raj and 356 others"}</Text>
                    <View style={styles.commentsec}>
                        <Image style={{ ...styles.dp, height: 26, width: 26 }} source={require(dp)} />
                        <TextInput placeholderTextColor="white" placeholder='Write a comment' />
                    </View>
                </View>
                {
                    SearchData.map((item) => {
                        return (<>
                            <View style={styles.cardHead}>
                                <Image source={{ uri: item.url2 }} style={styles.dp} />
                                <Text style={styles.cardTitle}>{item.name}</Text>
                                <Image style={styles.option} source={require('./src/assets/images/kebab.png')} />
                            </View>
                            <View style={styles.postVeiw}>
                                <Image resizeMode='contain' style={{ height: 294, width: '100%' }} source={{ uri: item.url1 }} />
                            </View>
                            <View style={styles.postBottom}>
                                <TouchableOpacity style={styles.like} onPress={() => { setToggle(!toggle) }}>
                                    <Image resizeMode='contain' style={{ height: 20, width: 20 }} source={toggle ? require('./src/assets/images/like.png') : require('./src/assets/images/heart.png')} />
                                </TouchableOpacity>
                                <Image style={{ height: 30, width: 30 }} source={require('./src/assets/images/comment.png')} />
                                <Image style={{ height: 18, width: 18 }} source={require('./src/assets/images/send.png')} />
                            </View>
                            <View style={styles.comments}>
                                <Text style={{ color: 'white' }}>{item.likes}</Text>
                                <View style={styles.commentsec}>
                                    <Image style={{ ...styles.dp, height: 26, width: 26 }} source={require(dp)} />
                                    <TextInput placeholderTextColor="white" placeholder='Write a comment' />
                                </View>
                            </View>
                        </>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 10,
    },
    commentsec: {
        flexDirection: 'row'
    },
    mainHead: {
        flexDirection: 'row',
        height: 42,
    },
    headText: {
        alignSelf: 'center',
        left: 22,
        fontWeight: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    option: {
        alignSelf: 'center',
        marginLeft: 360,
        position: "absolute",
        height: 20,
        width: 20
    },
    cardTitle: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 16,
        marginLeft: 4
    },
    cardHead: {
        flexDirection: 'row',
    },
    dp: {
        height: 31,
        width: 31,
        borderRadius: 50,
        margin: 5
    },
    postBottom: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 1,
        justifyContent: 'space-around'
    },
    like: {
        // height:'2%',
        // widht:'2%'
    },
    postVeiw: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 4,
    },
    comments: {
        margin: 8
    }
})