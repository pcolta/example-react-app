import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/user/Home";
import AdminHome from "./pages/admin/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PublicLayout from "./components/layout/PublicLayout";
import UserLayout from "./components/layout/UserLayout";
import AdminLayout from "./components/layout/AdminLayout";
import RequireAuth from "./pages/RequireAuth";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<RequireAuth/>}/>
            <Route path="/user" element={<UserLayout/>}>
                <Route path="/user" element={<Home/>}/>
            </Route>
            <Route path="/admin" element={<AdminLayout/>}>
                <Route path="/admin" element={<AdminHome/>}/>
            </Route>
            <Route element={<PublicLayout/>}>
                <Route
                    path="/login"
                    element={<Login/>}
                />
                <Route
                    path="/sign_up"
                    element={<SignUp/>}
                />
            </Route>

        </Routes>
    );
}
