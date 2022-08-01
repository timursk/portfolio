import '@emotion/react';
import { gray, blue } from '@radix-ui/colors/types/light';
import { grayDark, blueDark } from '@radix-ui/colors/types/dark';

type LightColors = typeof gray & typeof blue;
type DarkColors = typeof grayDark & typeof blueDark;
type Colors = LightColors | DarkColors;

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
  }
}
