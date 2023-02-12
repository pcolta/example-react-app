import * as React from "react";
import {BsLinkedin, BsFacebook} from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="footer">
            <div className="footer__wrapper">
                <div>{ t('Regulations') }</div>
                <div>
                    <BsLinkedin/>
                    <BsFacebook/>
                </div>
            </div>
        </div>
    )
}

export default Footer
