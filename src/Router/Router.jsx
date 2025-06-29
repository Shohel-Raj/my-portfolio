import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Page/Home";
import { projectDetailLoader } from "../Page/Projects/projectDetailLoader";
import ProjectDetail from "../Page/Projects/ProjectDetail";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path: 'project/:id', // dynamic route for project details
                loader: projectDetailLoader,
                Component:ProjectDetail
            },
        ]
        
    },



])