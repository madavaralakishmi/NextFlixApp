import { useState } from "react"


export const validateUserInputValue = (email,password,name)=>{
    console.log(email,password)
    
    const validateName = /^[a-zA-Z][a-zA-Z0-9_]{5,19}$/.test(name)
    const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password)
    if(validateName) return "Entered Invalid Name"
    if(!validateEmail) return "Entered Invalid Email";
    if(!validatePassword) return "Entered Invalid Password";

    return null
}