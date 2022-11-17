import {styled} from 'nativewind';

import {
  Button,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  View,
} from 'react-native';

import {FlashList} from '@shopify/flash-list';

import AppText from '../components/AppText';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  mainColor: {
    color: Colors.MAIN_COLOR,
  },
  mainFont: {
    fontFamily: 'Inter-Regular',
  },
  flex2: {
    flex: 2,
  },
  h1: {
    fontSize: 17,
  },
  h2: {
    fontSize: 14,
  },
  tabBar: {
    fontSize: 18,
    fontFamily: 'Inter-Regular',
  },
});

const StyledButton = styled(Button);
const StyledFlashList = styled(
  FlashList as unknown as new () => FlashList<any>,
);
const StyledFlatList = styled(FlatList);
const StyledImage = styled(Image);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledScrollView = styled(ScrollView);
const StyledText = styled(AppText);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledTouchable = styled(TouchableWithoutFeedback);
const StyledView = styled(View);

export {
  StyledButton,
  StyledFlashList,
  StyledFlatList,
  StyledImage,
  StyledSafeAreaView,
  StyledScrollView,
  StyledText,
  StyledTextInput,
  StyledTouchable,
  StyledTouchableOpacity,
  StyledView,
  styles,
};
