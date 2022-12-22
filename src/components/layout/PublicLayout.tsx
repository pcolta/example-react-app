import React from 'react'
import HeaderPublic from "../basic/HeaderPublic"
import Footer from "../basic/Footer"
import {Navigate, useOutlet} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PublicLayout = () => {
    const {user} = useAuth();
    const outlet = useOutlet();

    return (
        user ?
            <Navigate to="/"/> :
            <div className="layoutPublic">
                <HeaderPublic/>
                <div className="main">
                    {outlet}
                </div>
                <Footer/>
            </div>
    )
}

export default PublicLayout
