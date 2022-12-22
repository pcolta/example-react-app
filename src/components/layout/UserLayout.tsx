import React from 'react';
import Header from "../../../src/components/basic/Header";
import Footer from "../../../src/components/basic/Footer";
import Sidebar from "../../../src/components/basic/Sidebar";
import {Navigate, Outlet} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UserLayout = () => {
    const {user} = useAuth();

    return (
        user ?
            <div className="layoutProtected">
                <Header/>
                <Sidebar/>
                <div className="main">
                    <Outlet/>
                </div>
                <Footer/>
            </div> :
            <Navigate to="/login"/>
    )
}

export default UserLayout
