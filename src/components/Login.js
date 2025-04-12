import { Header } from "./Header"

export const Login = ()=>{
    return(
        <div >
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg" alt="body logo"/>
            </div>
            <form className="w-[400px] center absolute bg-black p-12 mx-auto my-27 left-0 right-0 text-white ">
                <input type="text" placeholder="Email" className="p-2 mx-30 bg-amber-700"/>
                <input type="text" placeholder="PassWord" className="p-2 m-4 "/>
                <button className="p-2 m-4 ">Sign in</button>
            </form>
        </div>
    )
}