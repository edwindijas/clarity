import { RouteObject } from "react-router";

export const dashboardRoutes: RouteObject[] = [
  {
    path: "/",
    Component: async () => {
      const { DashboardPage } = await import("src/features/dashboard");
      return <DashboardPage />;
    }
  }
];