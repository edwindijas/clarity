/// <reference types="@vitest/browser/providers/playwright" />

import { Theme, ThemeAction } from 'src/common/theme/types';
import { RouteHandle } from 'src/common/types/router';


declare module 'react-router' {
  interface IndexRouteObject {
    handle?: Partial<RouteHandle>
  }
  interface NonIndexRouteObject {
    handle?: Partial<RouteHandle>
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    theme: Theme;
    dispatch: React.Dispatch<ThemeAction>;
  }
}
declare global {
  function defineBackground (callback: () => void): void;
  function defineContentScript (options: {
    matches: string[];
    main: function;
    run_at: 'document_start' | 'document_end';
  }): void;
}
