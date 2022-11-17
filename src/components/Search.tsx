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
    <View className="flex flex-row flex-1 my-2 px-2 relative">
      <View className="absolute top-[5px] left-4 z-10">
        <Icon size={20} name="search" color={Colors.LIGHT_GRAY} />
      </View>
      <TextInput
        placeholder="Search recipe by name"
        keyboardType="default"
        className="bg-gray-100 flex-1 rounded-md w-full p-2 pl-8"
        style={styles.mainFont}
      />
    </View>
  );
};

export default Search;
