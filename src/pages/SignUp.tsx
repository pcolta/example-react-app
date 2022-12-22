import React, {FormEvent} from "react";
import {Link} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Input from "../components/form/Input";

export default function SignUp() {
    const {signUp, loading, error} = useAuth();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        signUp(
            formData.get("userName") as string,
            formData.get("firstName") as string,
            formData.get("lastName") as string,
            formData.get("email") as string,
            formData.get("password") as string
        );
    }

    return (
        <form className="signUp card form" onSubmit={handleSubmit}>
            <div className="signUp__wrapper">
                <div className="card__header">Zarejestruj się</div>

                <Input name="userName" label="Login" required={true}/>
                <Input name="firstName" label="Imię" required={true}/>
                <Input name="lastName" label="Nazwisko" required={true}/>
                <Input name="email" label="Email" required={true} type="email"/>
                <Input name="password" label="Hasło" required={true} type="password"/>

                {error && <p className="error">Sign up error!</p>}

                <div className="form__group">
                    <button disabled={loading} className="button__primary">Wyślij</button>
                </div>

                <div className="app_return">
                <Link to="/login" className="app__link">Wróć do logowania</Link>
                </div>
            </div>
        </form>
    );
}
