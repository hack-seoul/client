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
    },
  },
};

export const theme = extendTheme({ colors, styles });
