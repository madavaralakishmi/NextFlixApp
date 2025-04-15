import {useState , useEffect} from "react"
import { Header } from "./Header"
import { useRef } from "react"
import { validateUserInputValue } from "../../utils/ValidateUserInputValue"
import { auth } from "../../utils/firebase"
import { useNavigate } from "react-router"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { addUser } from "../../utils/userSlice"
import { useDispatch } from "react-redux"

export const Login = ()=>{

  const [isSignInForm , setisSignInForm] = useState(true)
  const [formErrorRes, setFormErrorRes] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
 
  // let ref = useRef(0) => using ref concept on counter
  let name = useRef(null)
  let email = useRef(null);
  let password = useRef(null)

  


  const handleButton = ()=>{
    // Form Validation 
    console.log(isSignInForm)
    let validateRes
    if(isSignInForm){
        validateRes = validateUserInputValue(email.current.value , password.current.value) 
    }else{
        validateRes = validateUserInputValue(email.current.value , password.current.value,name.current.value)} 
    setFormErrorRes(validateRes)
    // console.log(ref.current = ref.current+1) counter update using ref
   
    if(formErrorRes !== null) return 
  
    if(!isSignInForm){
        console.log(name.current.value)
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            //update the profile  and user redux store 
            updateProfile(user, {displayName: name.current.value})
                .then(() => {
                    // Profile updated!
                    dispatch(addUser({uid:auth.currentUser.uid, name:auth.currentUser.displayName, email:auth.currentUser.email}))
                    navigate("/browser")
                }).catch((error) => {email:
                setFormErrorRes(error.errorMessage)
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
        });
    }else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/browser")
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        });

    }

  }
   

  const handleSignInForm =()=>{
    setisSignInForm(!isSignInForm)
  }



    return(
        <div >
            <Header/>
            <div className=" absolute ">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg" alt="body logo"/>
            </div>
            <form onSubmit = {(e)=>e.preventDefault()} className="absolute bg-black/70  text-white  my-40 p-10 w-4/12 center mx-auto right-0 left-0 rounded-sm">
                <h1 className="font-bold text-3xl pb-3">{isSignInForm ? "Sign In" :"Sign Up"}</h1>
                {!isSignInForm && (<input type="text" ref={name} placeholder="Full Name" className="p-2  w-full my-4 text-white-900 center rounded-sm border-1 border-white-500" />) }
                <input ref={email} type="text" placeholder="Email or mobile number" className="p-2  w-full my-4 text-white-900 center rounded-sm border-1 border-white-500"/>
                <input ref={password} type="password" placeholder="Password"  className="p-2 my-4 w-full bg-text-700 rounded-sm border-1 border-white-500"/>
                <p className="font-bold text-red-600">{formErrorRes}</p>
                <button onClick={handleButton} className=" p-2 my-4 bg-red-700  center w-full rounded-sm ">{isSignInForm ? "Sign In" :"Sign Up"}</button>
                <p onClick={handleSignInForm} className="cursor-pointer">{isSignInForm ? "New to NetFlix?Sign up now." :"Already Register? Sign in"}</p>
            </form>
        </div>
    )
}