import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { darkTheme, lightTheme } from '../../common/constants/themes';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: lightTheme,
  reducers: {
    setLightTheme: (state) => {
      state.colors = { ...lightTheme.colors };
    },

    setDarkTheme: (state) => {
      state.colors = { ...darkTheme.colors };
    },
  },
});

export const { setLightTheme, setDarkTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;
