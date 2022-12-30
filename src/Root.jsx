import { createBrowserRouter } from "react-router-dom";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Main from "./pages/main/Main";
import Media from "./pages/media/Media";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/media',
                element: <Media></Media>
            }
        ]
    }
])
