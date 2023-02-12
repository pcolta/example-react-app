import React, {FormEvent} from "react";
import {Link} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Input from "../components/form/Input";
import { useTranslation } from "react-i18next";

export default function SignUp() {
    const {signUp, loading, error} = useAuth();
    const { t } = useTranslation();

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
                <div className="card__header">{t('Register')}</div>

                <Input name="userName" label={t('UserName')} required={true}/>
                <Input name="firstName" label={t('Name')} required={true}/>
                <Input name="lastName" label={t('Last name')} required={true}/>
                <Input name="email" label={t('Email')} required={true} type="email"/>
                <Input name="password" label={t('Password')} required={true} type="password"/>

                {error && <p className="error">{t('Sign up error')}</p>}

                <div className="form__group">
                    <button disabled={loading} className="button__primary">{t('Send')}</button>
                </div>

                <div className="app_return">
                <Link to="/login" className="app__link">{t('Go back to login')}</Link>
                </div>
            </div>
        </form>
    );
}
