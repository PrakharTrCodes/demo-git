import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import Login from '../Login';
import Register from '../Register'

const screens = {
    Home : {
        screen : Login
    },
    Register : {
        screen : Register
    }
}



const HomeStack = createStackNavigator();

export default createAppContainer(HomeStack)