/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import ChartKit from './ChartKit'; 

AppRegistry.registerComponent(appName, () => ChartKit);
