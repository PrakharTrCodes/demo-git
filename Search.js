import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Image } from 'react-native';
import SearchData from './SearchData';

export default function Search() {

    return (
        <View style={styles.main}>
            <ScrollView>
                <TextInput style={styles.searchBar} placeholderTextColor='#5e5e5e' placeholder='Search' />
                {
                    SearchData.map((item) => {
                        return (
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ height: 250, width: '50%' }}>
                                    <Image resizeMode='contain' style={{ height: '100%', width: '100%' }} source={{ uri: item.url1 }} />
                                </View>
                                <View style={{ height: 250, width: '50%' }}>
                                    <Image resizeMode='contain' style={{ height: '100%', width: '100%' }} source={{ uri: item.url2 }} />
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "black",
        paddingTop: 50
    },
    searchBar: {
        backgroundColor: '#111111',
        height: 30,
        width: '96%',
        borderRadius: 8,
        alignSelf: 'center',
        paddingHorizontal: 8,
        color: 'white'
    }
})
