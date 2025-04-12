
import { Browser } from "./Browser"
import { Login } from "./Login"
import { createBrowserRouter , RouterProvider } from "react-router"


export const Body =()=>{
    const routing = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/Browser",
            element:<Browser/>

        },
    ])

    return(
        <div className="">
           <div>
           <RouterProvider router={routing}>
            <Login/>
            <Browser/>
           </RouterProvider>
           </div> 
        </div>
    )
}