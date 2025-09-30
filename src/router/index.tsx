import React, { JSX } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router';

import { routes } from './routes';

const router = createMemoryRouter(routes);

export const Router = (): JSX.Element => {
  return <RouterProvider  router={router} />;
};
