import App from "./App";
import { RouteObject } from "react-router-dom";
import Landing from "./pages/Landing";
import DisplayError from "./pages/DisplayError";

const Routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        errorElement: <DisplayError />,
        children: [
            { index: true, element: <Landing /> }
        ]
    }
]

export default Routes;