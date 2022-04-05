import React,{useMemo, useState, useCallback} from 'react'
import { View, Text } from 'react-native';
import Button from './PracticeHooksCounter2Add'


export default function PracticeHooks() {

    const [counter1 , setCounter1] = useState(0);
    const [counter2, setCounter2 ] = useState(0);
    const isEven = useMemo(()=>{return counter1%2 === 0}, [counter1])

    const increament = useCallback(() => {
        for(let i=0; i<1000000; i++)
        setCounter2(counter2+1);
    },[counter2])
    return (
        <View>
            <View style = {{marginTop:100}}>
                <Button inc = {increament}/>         
            <Text>{counter2}</Text>
            <Text>{isEven ? "Even" : "Odd"}</Text>
            </View>
            
        </View>
    )
}
