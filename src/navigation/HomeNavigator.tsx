import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens';
import {StackParams} from '../interfaces';
import {NewsItem} from '../screens';

const Stack = createNativeStackNavigator<StackParams>();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="News"
        component={NewsItem}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
