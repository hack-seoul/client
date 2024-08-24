import { extendTheme } from '@chakra-ui/react';

const colors = {
  black: '#000000',
  white: '#FFFFFF',

  background: '#0F0F0F',
  border: '#4A4A4A',
  button: '#373737',

  gray: '#272727',
  grayLight: '#727272',
};

const styles = {
  global: {
    'html, body': {
      color: 'white',
      background: colors.background,
      fontFamily: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
    },
  },
};

export const theme = extendTheme({ colors, styles });
