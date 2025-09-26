import { RouterProvider, createMemoryRouter } from "react-router";

import { routes } from "./routes";
import React from "react";

const router = createMemoryRouter(routes);

export const Router: React.FC<{ startPath?: string }> = ({ startPath = '/' }) => {
  return <RouterProvider  router={router} />
}