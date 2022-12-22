import React from 'react';
import useAuth from "../hooks/useAuth";
import {Navigate} from "react-router-dom";

const RequireAuth = () => {
    const {user} = useAuth();
    return (
        user ?
            (
                user.role === "Admin" ? <Navigate to="/admin"/> : <Navigate to="/user"/>
            ) : <Navigate to="/login"/>
    )
}

export default RequireAuth;
