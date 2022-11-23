import React from 'react';
import 'react-native-gesture-handler';
import {LogBox} from 'react-native';
import {HomeNavigator} from './src/navigation';
import {NewsContextProvider} from './src/contexts/NewsContextProvider';

LogBox.ignoreLogs(['Require cycle:']);
export default () => {
  return (
    <NewsContextProvider>
      <HomeNavigator />
    </NewsContextProvider>
  );
};
