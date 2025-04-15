import { useNavigate } from "react-router";
import { auth } from "../../utils/firebase"
import { signOut } from "firebase/auth";

export const Browser= ()=>{
    const navigate = useNavigate()
    // signOut Authentication
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            navigate("/")
          }).catch((error) => {
            navigate("/error") 
          });
    }
    return(
        <>
            <div>
                <h1>Browser</h1>
                <button onClick={handleSignOut}>Sign out</button>
            </div>
        </>
    )
}