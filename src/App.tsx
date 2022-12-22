import React from 'react';
import useAuth, {AuthProvider} from "./hooks/useAuth";
import {
    BrowserRouter
} from "react-router-dom";
import Router from "./router";

function InnerApp() {
    const {user, loading, error, login, signUp, logout} = useAuth();
}

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <div className="app">
                    <Router/>
                </div>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
