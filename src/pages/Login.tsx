import React, {FormEvent} from "react";
import {Link} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Input from "../components/form/Input";

export default function Login() {
    const {login, loading, error} = useAuth();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        login(
            formData.get("email") as string,
            formData.get("password") as string
        );
    }

    return (
        <form className="login form card" onSubmit={handleSubmit}>
            <div className="login__wrapper">
                <div className="card__header">Zaloguj się</div>

                <Input name="email" label="Email" required={true} type="email"/>
                <Input name="password" label="Hasło" required={true} type="password"/>

                <div className="form__group">
                    <button disabled={loading} className="button__primary">Zaloguj</button>
                </div>

                {error && <p className="error">Bad login/password</p>}

                <div className="app_return">
                    <span>Jeśli nie masz jeszcze konta </span>
                    <Link to="/sign_up" className="app__link">Zarejestruj się</Link>
                </div>
            </div>
        </form>
    );
}
