import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../components/login/Login/Login";
import Register from "../../components/login/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);