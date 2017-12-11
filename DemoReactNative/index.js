import { AppRegistry } from 'react-native';
import App from './App';

import { Client } from 'rollbar-react-native'
const rollbar = new Client('af346bac2c69490f8acb58776a73dd18');

AppRegistry.registerComponent('DemoReactNative', () => App);
