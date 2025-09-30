import { useReducer, JSX } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { lightColors } from '.';

import { themeReducer } from './reducer';

export const ThemeProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [theme, dispatch] = useReducer(themeReducer, { colors: lightColors, mode: 'light' });
  return <StyledThemeProvider theme={{ theme, dispatch }}>{children}</StyledThemeProvider>;
};
