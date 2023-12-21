import { RecoilRoot } from "recoil";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
]);

function AppRoutes() {
	return (
		<>
			<RecoilRoot>
				<Suspense fallback="Carregando...">
					<RouterProvider router={router} />
				</Suspense>
			</RecoilRoot>
		</>
	);
}

export default AppRoutes;
