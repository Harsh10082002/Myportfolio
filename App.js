
import React, { useContext, useState, useContext } from "react";
import ReactDOM  from "react-dom/client";
import Home from "./src/components/Home";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Contact from "./src/components/Contact";
import Header from "./src/components/Header";
import Sidebar from "./src/components/Sidebar";
import About from "./src/components/About";
import Projects from "./src/components/Projects";
import Mycontext from "./utils/context/MyContext";


const App=()=>{
    const SidebarInfo = useContext(Mycontext);
    const isSideBarOpen = SidebarInfo[0].isSideBarOpen;

    const [isExpanded, setIsExpanded] = useState(isSideBarOpen);
    return<>
        <Mycontext.Provider value={{isSideBarOpen: isExpanded,setIsExpanded}} >
            <Header />
            <div className="flex w-screen h-screen">
                {isExpanded && <Sidebar /> }
                <Outlet />
            </div>
        </Mycontext.Provider>
    </>
}

const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children:[
            {
                path:"/",
                element:<Home />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/projects",
                element: <Projects />
            }
        ]
    }
])

const rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement);
root.render(<RouterProvider router={router}/>);
