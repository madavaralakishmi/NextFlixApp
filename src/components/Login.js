import {useState} from "react"
import { Header } from "./Header"


export const Login = ()=>{
  const [isSignInForm , setisSignInForm] = useState(true)

  const handleSignInForm =()=>{
    setisSignInForm(!isSignInForm)
  }



    return(
        <div >
            <Header/>
            <div className=" absolute ">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg" alt="body logo"/>
            </div>
            <form className="absolute bg-black/70  text-white  my-40 p-10 w-4/12 center mx-auto right-0 left-0 rounded-sm">
                <h1 className="font-bold text-3xl pb-3">{isSignInForm ? "Sign In" :"Sign Up"}</h1>
                <input type="text" placeholder="Email or mobile number" className="p-2  w-full my-4 text-white-900 center rounded-sm border-1 border-white-500"/>
                <input type="password" placeholder="Password"  className="p-2 my-4 w-full bg-text-700 rounded-sm border-1 border-white-500"/>
                <button className=" p-2 my-4 bg-red-700  center w-50 w-full rounded-sm ">Sign in</button>
                <p onClick={handleSignInForm} className="">New to NetFlix?Sign up now.</p>
            </form>

        </div>
    )
}