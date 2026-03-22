"use client"
import { userInfoStore } from "../zustandStore/userInfoStore"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import { UserTab } from "../SubComponents/UserTab";
export const Navigation =({ children }: { children: React.ReactNode })=>{

   

return(
    <>
    <header className="text-2xl flex flex-row justify-between px-6">
        <FontAwesomeIcon icon={faBars} />


    <UserTab />
        
    </header>
{children}
</>
)
}