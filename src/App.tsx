import { JSX } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import { Router } from './router';

export const App = ({ startPath, target }: { startPath?: string, target?: ShadowRoot }): JSX.Element =>
  <StyleSheetManager target={target}>
    <ThemeProvider theme={{}}>
      <Router startPath={startPath} />
    </ThemeProvider>
  </StyleSheetManager>;
