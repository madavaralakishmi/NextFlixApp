
import { auth } from "../../utils/firebase"
import { Browser } from "./Browser"
import { Login } from "./Login"
import { createBrowserRouter , RouterProvider } from "react-router"
import { useDispatch} from "react-redux"
import { onAuthStateChanged } from "firebase/auth"
import { addUser, removeUser } from "../../utils/userSlice"
import {useEffect} from "react"



export const Body =()=>{
    const dispatch = useDispatch()
    const routing = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browser",
            element:<Browser/>

        },
    ])
    

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              dispatch(addUser({uid:user.uid,name:user.displayName, email:user.email}))

            } else {
                dispatch(removeUser())
            }
          });

    },[])
    


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