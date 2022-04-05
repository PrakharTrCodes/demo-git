import * as React from 'react';
import { Button, View, Text } from 'react-native';



function HomeScreen({ navigation, route }) {

  const [counts , setCounts] = React.useState(0);

  React.useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight: () => (
        <Button color="black" onPress={() => setCounts(c => c + 1)} title="Update count" />
      )
    })
  },[counts])
    
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen  {counts}</Text>
        {route.params?<Text>{route.params.id}</Text>:<Text>{"Abhi nahi aaya"}</Text>}
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default HomeScreen;