import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../components/login/Login/Login";
import Register from "../../components/login/Register/Register";
import Courses from "../../components/Courses/Courses";

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
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            }
        ]
    }
]);