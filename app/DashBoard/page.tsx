"use client"
import { logOut } from "../functions/requests";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons";
export default function Home() {

const router = useRouter()

const logOutAccount =async()=>{
    const isLoggedOut = await logOut()
  
    console.log("gheree")

  
    if(isLoggedOut){
      router.push("/login")
    }
}
  return (
<section className="bg-[#E7F1EF] h-screen">
    HELLo
<button className="px-4 py-2 mt-2 rounded-md bg-[#173631] text-[#FEEA16]" onClick={logOutAccount}>Log out?</button>
<FontAwesomeIcon icon={faUser} className="text-red-500" />
</section>
  );
}