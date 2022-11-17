import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RouteProp} from '@react-navigation/native';
import {StackParams} from './interfaces';

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  StackParams,
  'Dish'
>;

export type DishScreenRouteProp = RouteProp<StackParams, 'Dish'>;

export type CategoryScreenRouteProp = RouteProp<StackParams, 'Category'>;
