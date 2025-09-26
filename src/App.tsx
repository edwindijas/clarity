import { Router } from "./router";
import { StyleSheetManager } from "styled-components";

export const App = ({ startPath, target }: { startPath?: string, target: ShadowRoot }) => <StyleSheetManager target={target}>
	<Router startPath={startPath} />
</StyleSheetManager>;