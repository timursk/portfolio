import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { ThemeToggle } from '../../components/ThemeToggle/ThemeToggle';
import { setDarkTheme, setLightTheme } from './themeSlice';

export enum THEMES {
  LIGHT = 'light',
  DARK = 'dark',
}

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const action = theme === THEMES.LIGHT ? setDarkTheme : setLightTheme;
    const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

    dispatch(action());
    setTheme(newTheme);
  };

  return <ThemeToggle theme={theme} onChange={handleClick} />;
};
