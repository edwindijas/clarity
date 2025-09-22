import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router";

import { routes } from "./routes";

const router = createBrowserRouter(routes);

export const Router = () => <RouterProvider router={router} />