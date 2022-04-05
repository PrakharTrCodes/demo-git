import { View, Text, SafeAreaView, StyleSheet, FlatList, Pressable, Image, TextInput } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'

const flatList=()=> {
    const flatListRef = useRef()
    const [data, setData] = useState([])
    const [page, setPage] = useState(1);
    const [isRef, setisRef] = useState(false);
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`).then(res => {
            setData([...data, ...res.data.data.map((item) => {
                return {
                    id: item.id,
                    name: item.name,
                    airName: item.airline[0].name,
                    country: item.airline[0].country,
                    headq: item.airline[0].head_quaters,
                    slogan: item.airline[0].slogan,
                    logo: item.airline[0].logo

                }
            })])

        })
    }, [page])

    const filterCards = (search) => {
        let res = data.filter(item => {
            if (item?.airName?.toLowerCase().startsWith(search.toLowerCase()))
                return item;
        });
        return res;
    }

    const searchMethod = (txt) => {
        setSearch(txt);
    }

    const Refress = () => {
        setisRef(true);
        setPage(1);
        page > 1 ? setData([]) : setData(data)
        setisRef(false)
    }

    const onPressFunction = () => {
        flatListRef.current.scrollToIndex({ index: 0 });
    };

    const header = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{"List of Airlines"}</Text>
            </View>
        )
    }

    const renderMyItem = ({ item }) => {
        const { name, airName, country, headq, slogan, logo } = item
        return (
            <View style={styles.textBlock}>
                <View style={styles.innerTextBlock}>
                    <View>
                        <Text style={{ ...styles.text, textAlign: 'center', fontWeight: 'bold' }}>{airName}</Text>
                        <Text style={styles.text}>{"Passenger:  "}<Text style={{ fontSize: 16, fontWeight: 'normal' }}>{name}</Text></Text>
                        <Image
                            resizeMode='contain'
                            style={{ height: 80, width: "100%", margin: 5, alignSelf: 'center' }} source={{ uri: logo }} />

                        <Text style={styles.text}>{"Country: "}<Text style={{ fontSize: 16 }}>{country}</Text></Text>
                        <Text style={{ ...styles.text, fontWeight: 'bold' }}>{"Headquarters: "}<Text style={{ fontSize: 16, fontWeight: 'bold' }}>{headq}</Text></Text>
                        <Text style={{ ...styles.text, fontSize: 16, color: '#3D454A', fontFamily: 'HelveticaNeue-Italic', textAlign: 'center' }}>{slogan}</Text>
                    </View>
                </View>
            </View>

        )
    }

    const endReached = () => {
        setPage(page + 1)
    }

    return (
        <SafeAreaView style={styles.parent}>
            {header()}
            <TextInput style={styles.searchHolder}
                placeholder="Search by name"
                placeholderTextColor='black'
                clearButtonMode='always'
                onChangeText={searchMethod} />
            <FlatList
                ref={flatListRef}
                data={filterCards(search)}
                renderItem={renderMyItem}
                keyExtractor={(item, index) => index}
                onEndReached={endReached}
                onEndReachedThreshold={0.3}
                refreshing={isRef}
                onRefresh={
                    Refress
                }
                extraData={data.airName}

            />
            <Pressable 
            style={styles.button} 
            
            onPress={onPressFunction}>
                <Text style={styles.arrow}>^</Text>

            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    arrow: {
        fontSize: 48,
    },
    parent: {
        backgroundColor: '#E9E5E5',
        flex: 1,
    }, innerParent: {
        flex: 1,
        margin: 1,
        height: 20
    },

    header: {
        justifyContent: 'space-around',
        height: 35,
        backgroundColor: '',
        alignItems: 'center',
        backgroundColor: '#323030',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        borderRadius: 30,
        marginLeft: '25%',
        marginRight: '25%',
    },
    searchHolder: {
        marginTop: 8,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 8,
        height: 26
    },
    headerText: {
        fontSize: 20,
        color: 'white',
        fontStyle: 'italic',
    },
    textBlock: {
        flex: 1,
        margin: 20,
        borderRadius: 12,
        backgroundColor: '#CDE4F3',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    innerTextBlock: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        flexDirection: 'row'
    },
    text: {
        margin: 6,
        fontSize: 16,
        color: 'black',
        justifyContent: 'space-around',
        fontWeight: 'bold'
    },
})

export default flatList;