import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
export const Colors = {
  primary: '#9146FF',
  secondary: '#2ecc71',
};

export const Themes = {
  light: {
    background: '#ffffff',
    text: '#ffffff',
  },
  dark: {
    background: '#1a1a1a',
    text: '#ffffff',
  },
};

export const Sizes = {
  borderRadius: 26,
  deviceWidth: width,
  deviceHeight: height,
  padding: 20,
};
