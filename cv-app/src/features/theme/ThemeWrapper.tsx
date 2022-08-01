import { ThemeProvider } from '@emotion/react';
import { FC, PropsWithChildren } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectTheme } from './themeSlice';

export const ThemeWrapper: FC<PropsWithChildren> = ({ children }) => {
  const theme = useAppSelector(selectTheme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
