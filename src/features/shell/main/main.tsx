import { JSX } from 'react';
import { Outlet } from 'react-router';

export const MainShell = (): JSX.Element => <div>
  <Outlet />
</div>;
