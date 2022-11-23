import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  StyledView as View,
  StyledTextInput as TextInput,
  styles,
} from '../styles/theme';
import Colors from '../constants/Colors';

const Search = () => {
  return (
    <View className="bg-[#0762A7] p-4 w-full flex-row justify-center items-center">
      <View className="flex-row relative">
        <View className="absolute top-1 mt-1 left-2 z-10">
          <Icon size={20} name="search" color={Colors.GRAY} />
        </View>
        <TextInput
          placeholder="Search news"
          keyboardType="default"
          className="h-10 bg-gray-100 flex-1 rounded-md w-full p-2 pl-8"
          style={styles.mainFont}
        />
      </View>
    </View>
  );
};

export default Search;
