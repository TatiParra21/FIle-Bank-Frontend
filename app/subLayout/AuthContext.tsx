"use client"
import { useRouter } from "next/navigation"
import { verifyUserNow } from "../functions/requests"
import { useState, useEffect, useCallback } from "react"
import { usePathname } from "next/navigation"

import { type UserType } from "../functions/requests"
export const AuthContext = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserType | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const pathname = usePathname()
    const router = useRouter()
    const checkUser = useCallback(async () => {
        try {
            const checkUser = await verifyUserNow()
            console.log(checkUser, "WHAT?")
            setUser(checkUser)

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