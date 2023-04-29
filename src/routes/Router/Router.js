import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../components/pages/login/Login/Login";
import Register from "../../components/pages/login/Register/Register";
import Courses from "../../components/pages/Courses/Courses";
import Home from "../../components/Home/Home";
import CourseDetail from "../../components/pages/CourseDetail/CourseDetail";
import PremiumServicePage from "../../components/pages/PremiumServicePage/PremiumServicePage";
import Blog from "../../components/Blog/Blog";
import NotFound from "../../components/Others/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
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
                loader: () => fetch('https://m-teaching-server.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`https://m-teaching-server.vercel.app/courses/${params.id}`),
                element: <CourseDetail></CourseDetail>
            },
            {
                path: '/premium/:id',
                loader: ({ params }) => fetch(`https://m-teaching-server.vercel.app/courses/${params.id}`),
                element: <PrivateRoute><PremiumServicePage></PremiumServicePage></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    { path: '*', element: <NotFound></NotFound> }
]);