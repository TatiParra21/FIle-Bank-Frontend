"use client"
import { logOut } from "../functions/requests";
import { useRouter } from "next/navigation";
import { userInfoStore } from "../zustandStore/userInfoStore"
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
export const UserTab =()=>{
     const [showUserTab, setShowUserTab] = useState<boolean>(false)
    const router = useRouter()
const email = userInfoStore(state=>state.email)
console.log(email, "email")
const logOutAccount =async()=>{
    const isLoggedOut = await logOut()
  
    console.log("gheree", email)

  
    if(isLoggedOut){
      router.push("/login")
    }
}
const toggleSetShow = ()=>{
    setShowUserTab(prev=>!prev)
}
return(
    <>
    {showUserTab ? <div className="bg-[#173631]">

        <div>
       <FontAwesomeIcon onClick={toggleSetShow} icon={faUser} className="text-red-500" />
        <p className="text-lg">{email}</p>
        </div>  
    <button className="px-4 py-2 mt-2 rounded-md bg-[#173631] text-[#FEEA16]" onClick={logOutAccount}>Log out?</button>
    
    </div> :  <FontAwesomeIcon onClick={toggleSetShow} icon={faUser} className="text-red-500" />
    }
    
    </>
)

}