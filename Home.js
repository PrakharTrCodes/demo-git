import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Details from'./Details';


function HomeScreen({ navigation, route }) {
  const Tab = createBottomTabNavigator();

  const Home = ({navigation})=>{
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen  {counts}</Text>
        {route.params?<Text>{route.params.id}</Text>:<Text>{"Abhi nahi aaya"}</Text>}
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
    )
  }


  const [counts , setCounts] = React.useState(0);

  React.useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight: () => (
        <Button color="black" onPress={() => setCounts(c => c + 1)} title="Update count" />
      )
    })
  },[counts])
    
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown : false, 
      tabBarIcon: ()=>{
        return(
          <Image style={{ height:25, width:25}} source={require('./src/assets/images/home.png')} />
        )
      },
        tabBarBadge:'2',
        tabBarActiveTintColor:"red"}} />
      <Tab.Screen name="Details" component={Details} options={{
        headerShown : false,
        tabBarIcon: ()=>{
          return(
            <Image style={{ height:25, width:25}} source={require('./src/assets/images/info.png')} />
          )
        }
      }} />
    </Tab.Navigator>
  );
}

export default HomeScreen;