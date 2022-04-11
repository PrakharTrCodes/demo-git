import React from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import Notification from './Notification';
import Search from './Search';
import Home from './Home';
import InstaLogin from './InstaLogin';
import SignUp from './SignUp';
import ModalInsta from './ModalInsta';

const Tab = createBottomTabNavigator();


const HomeStack = createNativeStackNavigator();


export default function Navigation() {
  const [isSignedIn, setisSignedIn] = React.useState(true);
  return (
    <NavigationContainer>{isSignedIn ? (
      <Tab.Navigator screenOptions={{
        tabBarStyle: { backgroundColor: '#383838' },
        tabBarShowLabel: false,
        headerShown:false,
        tabBarActiveTintColor: '#121212',
        tabBarActiveBackgroundColor: '#fbf4e9',
      }}>
        <Tab.Screen name="HomeStack" component={Home} options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ tintColor, focused }) => (
            <Image
              source={require('./src/assets/images/home.png')}
              style={focused ? { width: 32, height: 32, tintColor: tintColor } : { width: 26, height: 26, tintColor: tintColor }}
            />
          )
        }} />
        <Tab.Screen name="Search" component={Search} options={{
          tabBarIcon: ({ tintColor, focused }) => {

            return (
              <Image
                source={require('./src/assets/images/search.png')}
                style={focused ? { width: 32, height: 32, tintColor: tintColor } : { width: 26, height: 26, tintColor: tintColor }}
              />
            )
          }
        }} />
        <Tab.Screen name="Notifications" component={Notification} options={{
          tabBarIcon: ({ tintColor, focused }) => (

            <Image
              source={require('./src/assets/images/notibell.png')}
              style={focused ? { width: 32, height: 32, tintColor: tintColor } : { width: 26, height: 26, tintColor: tintColor }}
            />


          )
        }} />
        <Tab.Screen name="Profile" component={Profile} initialParams={{ setisSignedIn: setisSignedIn }} options={{
          headerTitle:'prakhar@30',
          headerTitleAlign:'left',
          headerTitleStyle:{color:'white'},
          tabBarIcon: ({ tintColor, focused }) => (
            <Image
              source={require('./src/assets/images/profile.png')}
              style={focused ? { width: 32, height: 32, tintColor: tintColor } : { width: 26, height: 26, tintColor: tintColor }}
            />
          )
        }} />
      </Tab.Navigator>
    ) : (
      <HomeStack.Navigator>
        <HomeStack.Screen options={{headerShown:false}} name="InstaLogin" component={InstaLogin} initialParams={{ setisSignedIn: setisSignedIn }} />
        <HomeStack.Screen options={{headerShown:false}} name="SignUp" component={SignUp} />
      </HomeStack.Navigator>
    )}

    </NavigationContainer>
  )
}
