import React from "react";
import useAuth from "../../hooks/useAuth";

export default function HomePage() {
    const { logout } = useAuth();

    return (
        <div className="home">

            <button type="button" onClick={logout}>
                Logout
            </button>
        </div>
    );
}
