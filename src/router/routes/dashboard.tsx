import { RouteObject } from 'react-router';

import { MainShell } from '@/src/common/components/organism/shell/main/Main';
import { DashboardPage } from '@/src/features/dashboard';

export const dashboardRoutes: RouteObject[] = [
  {
    path: '',
    Component: MainShell,
    children: [{
      path: '/',
      Component: DashboardPage
    }]
  }
];
