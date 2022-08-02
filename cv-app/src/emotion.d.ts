import '@emotion/react';

interface ColorItem {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}
interface Colors {
  primary: ColorItem;
  secondary: ColorItem;
}

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
  }
}
