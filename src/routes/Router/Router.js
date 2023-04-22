import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../components/pages/login/Login/Login";
import Register from "../../components/pages/login/Register/Register";
import Courses from "../../components/pages/Courses/Courses";
import Home from "../../components/Home/Home";
import CourseDetail from "../../components/pages/CourseDetail/CourseDetail";
import PremiumServicePage from "../../components/pages/PremiumServicePage/PremiumServicePage";

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
                element: <Courses></Courses>,
                loader: () => fetch(`http://localhost:5000/courses`)
            },
            {
                path: '/courses/:id',
                element: <CourseDetail></CourseDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/premium',
                element: <PremiumServicePage></PremiumServicePage>
            }
        ]
    }
]);