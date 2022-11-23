import {StyleSheet, Text, TextStyle} from 'react-native';
import React, {ReactNode} from 'react';
import Colors from '../constants/Colors';

type TextProps = {
  children: JSX.Element | ReactNode | string;
  textType?: 'regular' | 'bold' | 'light';
  style?: TextStyle | Array<TextStyle>;
};
const AppText = ({children, style, textType}: TextProps) => {
  let textStyle = {};
  switch (textType) {
    case 'light': {
      textStyle = styles.light;
      break;
    }
    case 'regular': {
      textStyle = styles.regular;
      break;
    }
    case 'bold': {
      textStyle = styles.bold;
      break;
    }
    default: {
      textStyle = styles.regular;
      break;
    }
  }
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;
  const customStyles: any = passedStyles ? Object.values(passedStyles) : null;
  if (customStyles) {
    return <Text style={[textStyle, ...customStyles]}>{children}</Text>;
  }
  return (
    <Text style={[textStyle, {color: Colors.SECONDARY_COLOR}]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  light: {
    fontFamily: 'Roboto-Light',
  },
  bold: {
    fontFamily: 'Roboto-Bold',
  },
  regular: {
    fontFamily: 'Roboto-Book',
  },
});

export default AppText;
