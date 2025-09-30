/// <reference types="@vitest/browser/providers/playwright" />

import { RouteHandle } from 'src/common/types/router';

declare module 'react-router' {
  interface IndexRouteObject {
    handle?: Partial<RouteHandle>
  }
  interface NonIndexRouteObject {
    handle?: Partial<RouteHandle>
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
