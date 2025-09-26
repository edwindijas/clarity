import { Outlet } from "react-router";
import { StyledMainShell } from "./style";

export const MainShell = () => <StyledMainShell>
    <Outlet />
</StyledMainShell>;