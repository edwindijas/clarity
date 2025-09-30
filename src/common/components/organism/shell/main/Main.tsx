import { JSX } from 'react';
import { Outlet } from 'react-router';

import { StyledMainShell } from './style';
import { Header } from '../../header/header';

export const MainShell = (): JSX.Element => <StyledMainShell>
  <div>
    <Header />
  </div>
  <Outlet />
</StyledMainShell>;
