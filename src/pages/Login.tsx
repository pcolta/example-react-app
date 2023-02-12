import React, {FormEvent} from "react";
import {Link} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Input from "../components/form/Input";
import {useTranslation} from "react-i18next";

export default function Login() {
    const {login, loading, error} = useAuth();
    const { t } = useTranslation();

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
                <div className="card__header">{t('Log in')}</div>

                <Input name="email" label={t('Email')} required={true} type="email"/>
                <Input name="password" label={t('Password')} required={true} type="password"/>

                <div className="form__group">
                    <button disabled={loading} className="button__primary">{t('Login')}</button>
                </div>

                {error && <p className="error">{t('Bad login/password')}</p>}

                <div className="app_return">
                    <span>{t('If you don\'t have an account yet')}</span>
                    <Link to="/sign_up" className="app__link">{t('Register')}</Link>
                </div>
            </div>
        </form>
    );
}
