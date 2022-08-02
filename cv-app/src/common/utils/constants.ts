import { blue, gray } from '@radix-ui/colors';

export const lightTheme = {
  colors: {
    primary: {
      light: gray.gray1,
      main: gray.gray3,
      dark: gray.gray11,
      contrastText: gray.gray12,
    },
    secondary: {
      light: blue.blue1,
      main: blue.blue3,
      dark: blue.blue11,
      contrastText: blue.blue12,
    },
  },
};

export const darkTheme = {
  colors: {
    primary: {
      light: gray.gray12,
      main: gray.gray10,
      dark: gray.gray2,
      contrastText: gray.gray1,
    },
    secondary: {
      light: blue.blue12,
      main: blue.blue9,
      dark: blue.blue3,
      contrastText: blue.blue1,
    },
  },
};
