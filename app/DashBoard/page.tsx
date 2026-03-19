"use client"
import { logOut } from "../functions/requests";
import { userInfoStore } from "../zustandStore/userInfoStore";
export default function Home() {
const resetUserInfo = userInfoStore(state=>state.resetUserInfo)


const logOutAccount =async()=>{
    const isLoggedOut = await logOut()
    console.log("gheree")
  
    if(isLoggedOut) resetUserInfo()
}
  return (
<section>
    HELLo
<button className="px-4 py-2 mt-2 rounded-md bg-[#173631] text-[#FEEA16]" onClick={logOutAccount}>Log out?</button>

</section>
  );
}