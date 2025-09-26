import { MainShell } from "@/src/common/components/organism/shell/main/Main";
import { DashboardPage } from "@/src/features/dashboard";
import { RouteObject } from "react-router";

export const dashboardRoutes: RouteObject[] = [
  {
    path: "",
    Component: MainShell,
    children: [{
      path: "/",
      Component: DashboardPage
    }]
  }
];