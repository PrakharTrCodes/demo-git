import axios from 'axios';
import React, { useEffect, useState, useReducer } from 'react';
import { View, Text, SafeAreaView, SectionList, StyleSheet, Image, TouchableOpacity, Linking, Alert } from 'react-native';

const reducer = (state , action)=>{
    switch(action.type){
        case "datapre":
            return {...state, ...ress }
        case "len":
            return {...state, len : 6}
        case "dynText":
            return {...state, dynText:'Read Less'}
        case "counter":
            return {...state, counter : counterUpd()}
        case "page":
            return {...state, page : state.page + 2}
        case "isRef":
            return {...state, isRef: !state.isRef}
        default:
            return state
    }


}

export default function Sectionlist() {
    const [state, dispatch] = useReducer(reducer, {
        datapre: [],
        len: 2,
        dynText: 'Read more',
        counter: 2,
        page: 3,
        isRef: false
    })

    counterUpd= ()=>{
        return counter + 1

    }

    useEffect(() => {
        async function api() {
            try {
                let myResp = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f8b2b7ab123e45c38f75adb16bb79680')
                var ress =myResp.data.articles.slice(0, page).map((item) => {
                    return {
                        name: item.source.name,
                        desc: item.description,
                        title: item.title,
                        urlToImage: item.urlToImage,
                        url: item.url,
                        author: item.author
                    }
                })
                
            }
            catch (err) {
                console.log(err)
            }
        }
        api();
    }, [])


    const formatData = () => {
        return (datapre.reduce((accum, current) => {
            // console.log("inside reduce",accum,current)
            let group = accum.find(x => x.author === current.author);
            if (!group) {
                group = { author: current.author, data: [] }
                accum.push(group);
            }
            group.data.push(current);
            return accum;
        }, []))
    }

    const myRenderItem = (item) => {
        return (
            <View>
                <View style={styles.container}>
                    <Image style={styles.img} source={{ uri: item.urlToImage }} />
                    <View style={styles.txtContainer}>

                        <Text style={{ fontSize: 25 }}>
                            {item.author}
                        </Text>
                    </View>
                    <View style={styles.title}>

                        <Text style={{ fontSize: 20, marginBottom: 5 }}>
                            {item.title}
                        </Text>
                        <Text style={{ color: 'grey' }} numberOfLines={len} onPress={() => Linking.openURL(item.url)}>
                            {item.desc},
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => {

                        if (counter % 2 === 0) {
                            setLen(6);
                            setdynTxt('Read less')
                        }
                        else {
                            setLen(2);
                            setdynTxt('Read more')
                        }
                        
                    }
                    }>
                        <Text style={{ color: 'blue' }}>
                            {dynText}
                        </Text>
                    </TouchableOpacity>


                </View>
            </View>
        )
    }
    Refress = () => {
        setisRef(true)
        myResp = axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f8b2b7ab123e45c38f75adb16bb79680').then((myResp) => {
            setData(myResp.data.articles.slice(page, page + 50).map((item) => {
                return {
                    name: item.source.name,
                    desc: item.description,
                    title: item.title,
                    urlToImage: item.urlToImage,
                    url: item.url,
                    author: item.author
                }
            })

            )
            setisRef(false)
        })
        setPage(page + 3)
    }


    const endFun = () => {
        Alert.alert("You have reached the end, Refresh")
    }


    const myRenderTitle = (author) => {
        return (
            <View style={{ height: 60, backgroundColor: "#dcdcdc", padding: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}><Text style={{ fontSize: 20 }}>{author}</Text></View>
        )
    }
    console.log(formatData())
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: "pink", justifyContent: 'center', alignItems: 'center', padding: 16, flexDirection: 'row' }}>
                <Image style={{ height: 36, width: 65, borderRadius: 6 }} source={require('./src/assets/images/news33.jpeg')} />
                <Text style={{ fontSize: 22 }}>
                    {'  '}{"News App"}
                </Text>
            </View>
            <SectionList
                sections={formatData()}
                renderItem={({ item }) => {
                    return (
                        myRenderItem(item)
                    )
                }}
                renderSectionHeader={({ section }) => {
                    return (myRenderTitle(section.author))
                }}
                initialNumToRender={4}
                ListEmptyComponent={<View style={{ backgroundColor: 'yellow', flex: 1 }}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
                        {"Your Internet is slow"}
                    </Text>
                </View>}
                onEndReached={
                    () => {
                        endFun();
                    }
                }
                onEndReachedThreshold={0}
                refreshing={isRef}
                onRefresh={() => {
                    Refress();
                }}

            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    list: {
        // height: '30%',
        marginTop: 20,
        padding: 10

    },
    container: {
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        margin: 10,
        padding: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.98,
        shadowRadius: 9.51,

        elevation: 15,
    },
    img: {
        width: 220,
        height: 170,
        alignSelf: 'center',
        borderRadius: 6,
        marginTop: 8,
    },
    txtContainer: {
        alignItems: 'center',

    },
    title: {
        padding: 5,
        backgroundColor: 'white',
        margin: 8,
        elevation: 15,
        shadowOpacity: 0.30,
        shadowRadius: 3.51,
    },
    parent: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 30
    }
}
)