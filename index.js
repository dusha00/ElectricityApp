/** @format */

import {AppRegistry} from 'react-native';
import App from './App';

import setup from './root';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => setup());
