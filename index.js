/**
 * @format
 */
import Navigation from './Navigation';
import meraCode from './meraCode'
import {AppRegistry} from 'react-native';
import App from './App';
import Today from './Today';
import {name as appName} from './app.json';
import learningStyles from './learningStyles';
import myApp from './myApp'
import Sectionlist from './Sectionlist';
import PureComp from './PureComp';
import Zomato from './Zomato';
import Login from './Login'
import Register from './Register'
import Student from './Student'
import PracticeHooks from './PracticeHooks'
AppRegistry.registerComponent(appName, () => Navigation);
