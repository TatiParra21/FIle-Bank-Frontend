
import {create} from "zustand"

export type UserInfo ={
    id: number | null,
    email:string,

}

export type UserInfoStoreType = UserInfo & {
resetUserInfo: ()=> void,
setUserInfo: (id:number, email:string)=>void
getUserInfo: ()=>{id:number|null,email:string}

}
export const userInfoStore = create<UserInfoStoreType>((set,get)=>({
    id: null,
    email:"",
    resetUserInfo: ()=> set({id:null,email:""}),
    setUserInfo: (id:number,email:string) => set({id:id, email:email}),
    getUserInfo:()=>{
        const state = get()
        return{id:state.id, email:state.email}
    }

}))