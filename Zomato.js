import React, { useReducer } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, SectionList } from 'react-native'



const renderMenu = (item) => {
    return (
        <View style = {{flexDirection: 'row', alignContent:'space-between'}}>
            <Text>
                {item.name}
            </Text>
            <View>

            <Text>
                {item.rate}
            </Text>
            </View>
        </View>
    )
}


export default function Zomato() {
    // const [] = useReducer(reducer, [])

    myData = [
        {
            title: 'Desert',
            data: [{ name: 'Halua', rate: '140' }, { name: 'Rasogulla', rate: '20' }, { name: 'Ice-Cream', rate: '80' }, { name: 'Browniw', rate: '120' }]
        },
        {
            title: 'Main-Course',
            data: [{ name: 'Shahi Panner', rate: '240' }, { name: 'Kadhai Paneer', rate: '260' }, { name: 'Paneer Bhurji', rate: '160' }, { name: 'Handi Paneer', rate: '220' }]
        },
    ]


    return (
        <View style={styles.mainContainer}>
            <View style={styles.upperBar}>
                <Image style={{ height: 40, width: 40, marginRight: 200 }} source={require('/Users/admin/Desktop/ReactNative/TrainingProject/src/assets/images/back.jpeg')} />
                <Image style={{ height: 40, width: 40, marginRight: 4 }} source={require('/Users/admin/Desktop/ReactNative/TrainingProject/src/assets/images/fav.png')} />
                <Image style={{ height: 40, width: 40, marginRight: 4 }} source={require('/Users/admin/Desktop/ReactNative/TrainingProject/src/assets/images/rightArrow.png')} />
                <Image style={{ height: 40, width: 40, marginRight: 4 }} source={require('/Users/admin/Desktop/ReactNative/TrainingProject/src/assets/images/info.png')} />
            </View>
            <View>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{'Subway'}</Text>
                <Text>
                    {'Healthy Food, Fast Food, Sandwich'}
                </Text>
                <View style={{ alignSelf: 'flex-end', backgroundColor: "green", width: 30, borderRadius: 4 }}>
                    <Text>
                        {'3.8'}
                    </Text>
                </View>
                <Text style={{ color: 'grey' }}>
                    {'C block, Logic Cyber Park'}
                </Text>
            </View>
            <View>
                <SectionList
                    sections={myData}
                    renderSectionHeader={({ section }) => {
                        return (<View>
                            <Text>{section.title}</Text>
                        </View>)
                    }}
                    renderItem={({ item }) => { return (renderMenu(item)) }}

                />
            </View>

        </View>
    )
}


const styles = StyleSheet.create(
    {
        upperBar: {
            flexDirection: 'row'
        },
        mainContainer: {
            backgroundColor: 'white',
            marginTop: 30
        }
    }
)