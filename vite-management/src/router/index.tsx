// import App from "@/App";
// import Home from "@/views/Home";
// import About from "@/views/About";

// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// const baseRouter =() => (
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<App/>}>
//                 <Route path="/" element={<Navigate to={"/home"}/>}></Route>
//                 <Route path="/home" element={<Home/>}></Route>
//                 <Route path="/about" element={<About/>}></Route>
//             </Route>
//         </Routes>
//     </BrowserRouter>
// )

// export default baseRouter;

import { lazy } from "react";
//import About from "@/views/About";
import Home from "@/views/Home";
//const About = lazy(()=>import("@/views/About"));
const Page1 = lazy(()=>import("@/views/DataManage/Page1"));
const Page2 = lazy(()=>import("@/views/DataManage/Page2"));

import { Navigate } from "react-router-dom";

const routes = [
    {
        path: "/",
        element: <Navigate to={"/page1"}/>
    },
    {
        path: "/",
        element: <Home />,
        children:[
            {
                path: "/page1",
                element: <Page1 />
            },
            {
                path: "/page2",
                element: <Page2 />
            }
        ]
    }
]

export default routes;