"use client"
import { userInfoStore } from "../zustandStore/userInfoStore"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import { UserTab } from "./UserTab";
export const Navigation =({ children }: { children: React.ReactNode })=>{

   

return(
    <>
    <header>
        <FontAwesomeIcon icon={faBars} />


    <UserTab />
        
    </header>
{children}
</>
)
}