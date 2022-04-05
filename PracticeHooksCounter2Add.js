import React from 'react'
import { View, Text } from 'react-native'

export default function PracticeHooksCounter2Add(props) {
    const myFun = props.inc;

    return (
        <View>
            <Text onPress={myFun}>{"Press"}</Text>
        </View>
    )
}
