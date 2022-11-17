import React from 'react';
import 'react-native-gesture-handler';
import {LogBox} from 'react-native';
import {HomeNavigator} from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

LogBox.ignoreLogs(['Require cycle:']);
export default () => {
  return (
    <Provider store={store}>
      <HomeNavigator />
    </Provider>
  );
};
