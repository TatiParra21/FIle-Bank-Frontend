"use client"
import { useRouter } from "next/navigation"
import { verifyUserNow } from "../functions/requests"
import { useState, useEffect, useCallback } from "react"
import { usePathname } from "next/navigation"
import { type UserInfo } from "../zustandStore/userInfoStore"
import { userInfoStore } from "../zustandStore/userInfoStore"
type UserVerfiedType ={
    authenticated: boolean,
    user:{
        email:string,
        exp:number,
        iat:number,
        userId:number,
        verified:boolean
    }

}
export const AuthContext = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserVerfiedType | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const setUserInfo = userInfoStore(state=>state.setUserInfo)
    const pathname = usePathname()
    const router = useRouter()
    const checkUser = useCallback(async () => {
        try {
            const checkUser:UserVerfiedType | null = await verifyUserNow()
            console.log(checkUser, "WHAT?")
            if(checkUser){
            if (pathname == "/login" || pathname == "/") {
                console.log("WAAIYT")
                router.push('/DashBoard')
            }
            setUser(checkUser)
            const userInfo = {id:checkUser.user.userId, email: checkUser.user.email}
            setUserInfo(userInfo)
            }else if(!checkUser){
                throw new Error("no user")
            }
        } catch (err) {
            setUser(null)
            if (pathname !== "/login" && pathname !== "/") {
                router.push('/login')
            }
        } finally {
            setLoading(false)
        }
    }, [pathname, router])
    useEffect(() => {
        checkUser()
    }, [pathname, checkUser])
    return (
        <>{children}</>
    )
}