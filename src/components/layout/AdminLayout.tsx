import React from 'react';
import Header from "../../../src/components/basic/Header";
import Footer from "../../../src/components/basic/Footer";
import {Navigate, Outlet} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UserLayout = () => {
    const {user} = useAuth();

    return (
        user ?
            <div className="layoutAdmin">
                <Header/>
                <div className="main">
                    <Outlet/>
                </div>
                <Footer/>
            </div> :
            <Navigate to="/login"/>
    )
}

export default UserLayout
