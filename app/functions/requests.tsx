


export const signUp =async(email :string, password:string):Promise<string>=>{
    const data = {email, password}
         const res = await fetch(`http://localhost:400/file-bank/sign-up`,{method:"POST",
        headers:{
            "Content-type": 'application/json'
        },body: JSON.stringify(data)
    })
    const response = await res.json()
    if(!res.ok)throw new Error(response.error|| "An unknown error occurred")
    return response.message
}
export type LogInResponse ={
    userId:number, email:string
}
export const logIn =async(email :string, password:string):Promise<LogInResponse>=>{
    const data = {email,password}
         const res = await fetch(`http://localhost:400/file-bank/log-in`,{method:"POST",
             credentials: "include",
        headers:{
            "Content-type": 'application/json'
        },body: JSON.stringify(data)
    })
    const response = await res.json() 
    if (!res.ok)throw new Error(response.error || "An unknown error occurred")
    return response as LogInResponse
}

export const logOut =async():Promise<boolean>=>{
         const res = await fetch(`http://localhost:400/file-bank/log-out`,{method:"POST",
             credentials: "include",
        headers:{
            "Content-type": 'application/json'
        },
    })
    const response = await res.json() 
    if (!res.ok)throw new Error(response.error || "An unknown error occurred")

    return response.loggedOut as boolean
}
export type UserType = {
    id: number,
    email: string,
   
}
export const verifyUserNow = async (): Promise<UserType| null> => {
   const res = await fetch(`http://localhost:400/check-user`,{
  method: "GET",
  credentials: "include"
})
 const response = await res.json()
     console.log(response, "response")
   

  if (!res.ok) {
    throw new Error("Something went wrong checking user")
  }
if(!response.authenticated)return null
  
   return response as UserType
}

export const resendVerificationMail =async(email :string, password:string):Promise<string>=>{
    const data = {email,password}
const res = await fetch(`http://localhost:400/file-bank/resend-verification`,{method:"POST",
        headers:{
            "Content-type": 'application/json'
        },body: JSON.stringify(data)
    })
    const response = await res.json()
    if (!res.ok)throw new Error(response.error || "An unknown error occurred")
    return response.message
}