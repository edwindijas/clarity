import { JSX } from 'react';
import { ThemeProvider } from 'src/common/theme';
import { StyleSheetManager } from 'styled-components';

import { Router } from './router';

export const App = ({ target }: { target?: ShadowRoot }): JSX.Element =>
  <StyleSheetManager target={target}>
    <ThemeProvider >
      <Router />
    </ThemeProvider>
  </StyleSheetManager>;
