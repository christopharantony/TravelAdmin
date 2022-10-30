import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
export default function PrivateRoutes() {
    const [token, setToken] = useState("")
    useEffect(() => {
        setToken(localStorage.getItem('adminToken'))
        // eslint-disable-next-line
    }, [])

    return (
        <>
        {
            token ? <Outlet /> : <Navigate to="/login" />
        }
        </>
    )
}