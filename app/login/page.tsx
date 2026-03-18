"use client"
import { JSX, useState, type SubmitEventHandler } from "react"
import { userInfoStore } from "./zustandStore/userInfoStore"
import { signUp, logIn,resendVerificationMail, LogInResponse } from "./functions/requests"
 const LoginPage = (): JSX.Element => {
    const setUserInfo = userInfoStore(state=>state.setUserInfo)
    const [errorMessage, setErrorMessage] = useState<string |null>(null)
    const sendData: SubmitEventHandler<HTMLFormElement> = async(e) => {
        console.log("sent dara")
        e.preventDefault()
        const formEl = e.target
        const email:string = formEl.email.value
        const password:string = formEl.password.value
        const submitter = e.nativeEvent.submitter as HTMLButtonElement
         const action = submitter.value
      try {
    if (action === "signup") {
         const message :string= await signUp(email, password)
            setErrorMessage(message)
        
    } else if (action === "login") {
         const data:LogInResponse = await logIn(email, password)
         setUserInfo(data.userId,data.email)     
        }else if (action === "resend") {
         const data:string = await resendVerificationMail(email, password)
         setErrorMessage(data)
        
        }
        }  catch (error) {
            if(error instanceof Error){
                setErrorMessage(error.message)
            }else{
                setErrorMessage("Something went wrong")
            }
  }
    }
    return (
         <section className="flex flex-col bg-[#E7F1EF] align-center h-[100svh] justify-center">
            <form onSubmit={sendData} className="flex flex-col align-center content-center items-center">
              
                <label className="flex flex-col text-[#173631]" htmlFor="email">Email:
                <input className="border border-solid border-2px border-black" id='email' name="email" type="email"></input>
                </label>
                <label className="flex flex-col text-[#173631]" htmlFor="password">Password:
                <input className="border border-solid border-2px border-black" id='password' name="password" type="password"></input>
                </label>
                <button  type="submit" value="signup" name="action" className="px-4 py-2 mt-2 rounded-md bg-[#173631] text-[#FEEA16]">Sign up</button>
                <button type="submit" value="login" name="action" className="px-4 py-2 mt-2 rounded-md bg-[#173631] text-[#FEEA16]">Log in</button>
                {errorMessage =="Not authenticated" && <button type="submit" value="resend" name="action" className="px-4 py-2 mt-2 rounded-md bg-[#173631] text-[#FEEA16]">Resend verification email? </button>}
            </form>
            {errorMessage &&<p>{errorMessage}</p> }

            
    </section>

    )
   
}
export default LoginPage