import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { HeaderBackButton } from 'react-navigation-stack';


export default function DetailsScreen(prop) {
  React.useLayoutEffect((()=>{
    prop.navigation.setOptions({headerBackTitle : "Peeche ja"})
  }))
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => prop.navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => prop.navigation.navigate('Home', {id : "Home"})} />
      <Button title="Go back" onPress={() => prop.navigation.goBack()} />
    </View>
  );
}