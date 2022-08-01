import { blue, blueDark, gray, grayDark } from '@radix-ui/colors';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const theme = {
  colors: {
    ...gray,
    ...blue,
  },
};

const darkTheme = {
  colors: {
    ...grayDark,
    ...blueDark,
  },
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: theme,
  reducers: {
    setLightTheme: (state) => {
      state.colors = { ...theme.colors };
    },

    setDarkTheme: (state) => {
      state.colors = { ...darkTheme.colors };
    },
  },
});

export const { setLightTheme, setDarkTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;
