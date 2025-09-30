import { JSX } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import { Router } from './router';

export const App = ({ target }: { target?: ShadowRoot }): JSX.Element =>
  <StyleSheetManager target={target}>
    <ThemeProvider theme={{}}>
      <Router />
    </ThemeProvider>
  </StyleSheetManager>;
