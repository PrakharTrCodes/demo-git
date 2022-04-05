import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./Login";
import Register from "./Register";
import Details from './Details';
import Home from './Home';
const Stack = createNativeStackNavigator();

console.log(Stack);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {
        backgroundColor: '#FFFDD0',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      }}}>
        <Stack.Screen name="Home" component={Home} options = {{title:"Home"}}/>
        <Stack.Screen name = "Details" component = {Details} options = {{title:"Details"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;