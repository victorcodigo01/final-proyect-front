import { useEffect } from "react"
import { getUserInfo } from "./user.api"
import { useState } from "react";


export const useUser = () => {
    const [user, updateUser] = useState({});

    useEffect (() => {
        getUserInfo()
        .then(updateUser)
    },[])

    return{
        user
    }
}