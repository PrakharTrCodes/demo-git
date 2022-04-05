import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';

export default function myApp() {
    const [myvar, setmyvar] = useState([]);
    const [len, setLen] = useState(2);
    const [dynText, setdynTxt] = useState('Read more');
    const [counter, setCounter] = useState(true);
    const [search, setSearch] = useState('')

    const filterCards = (search) => {
        let res=myvar.filter(item=>{
            if(item?.author?.toLowerCase().startsWith(search.toLowerCase()))
            return item;
        });
        return res;
    }

    const searchMethod = (txt)=>{
        setSearch(txt);
    }


    const renderingMyView = (item) => {
        return (
            <View>
                <View style={styles.container}>
                    <Image style={styles.img} source={{ uri: item.urlToImage }}/>
                    <View style={styles.txtContainer}>

                        <Text style={{ color:'white',fontSize: 25 }}>
                            {item.author}
                        </Text>
                    </View>
                    <View style={styles.title}>

                        <Text style={{ fontSize: 20, marginBottom: 5 }}>
                            {item.title}
                        </Text>
                        <Text style={{ color: 'grey' }} numberOfLines={len}>
                            {item.description},
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => {

                        if (counter  == true) {
                            setLen(item.description.length);
                            setdynTxt('Read less');
                            setCounter(false);
                        }
                        else {
                            setLen(2);
                            setdynTxt('Read more');
                            setCounter(true);
                        }
                        
                    }
                    }>
                        <Text style={{ color: 'lightblue' }}>
                            {dynText}
                        </Text>
                    </TouchableOpacity>


                </View>
            </View>
        )
    }

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f8b2b7ab123e45c38f75adb16bb79680').then((res) => {
            setmyvar(res.data.articles.map((item) => {
                return (item)
            }))
        })
    }, [])

    return (
        <View style={styles.parent}>
            <Text style = {styles.logo}>
                {'News App'}
            </Text>
            <View style={styles.list}>
                <TextInput style={styles.searchHolder} 
                placeholder = "Search by name"
                placeholderTextColor= 'white'
                clearButtonMode= 'always'
                onChangeText={searchMethod}/>

                <FlatList
                    data={filterCards(search)}
                    renderItem={({ item }) => {
                        return renderingMyView(item)
                    }}
                    refreshing = {true}
                    keyExtractor={(item, index) => index}
                    extraData={myvar.author}
                    ListEmptyComponent={<Text>
                        {"Empty List"}
                    </Text>}
                    ListFooterComponent={<View style={styles.footer}><Text>
                        End Of the list</Text></View>}

                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer:{ 
        backgroundColor: 'grey',
        borderRadius: 8 },
    logo:{
        backgroundColor:'#e50912',
        fontSize: 25,
        fontWeight: 'bold',
        color : 'white', 
        alignSelf:'center', 
        marginTop:18
    },

    searchHolder:{
        borderColor: 'white',
        borderWidth: 2,
        borderRadius : 8,
        height: 26
    },
    list: {
        marginTop: 20,
        padding: 10

    },
    container: {
        margin: 10,
        padding: 8,
        elevation: 15,
    },
    img: {
        width: 300,
        height: 220,
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
        backgroundColor: 'black',
        flex: 1,
        paddingTop: 30
    }
}
)
