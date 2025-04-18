// creating sign up and sign in 
import {auth} from "../utils/firebase"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";


const userAuthenticate = (isSignInForm , email , password)=>{
    let errorMessage = ""
    if(!isSignInForm){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            errorMessage=errorMessage
        });
    }else{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            errorMessage=errorMessage
        });
    }
    return errorMessage

}

export default userAuthenticate