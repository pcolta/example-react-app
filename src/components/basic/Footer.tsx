import * as React from "react";
import {BsLinkedin, BsFacebook} from "react-icons/bs";

const Footer = () => (
    <div className="footer">
        <div className="footer__wrapper">
            <div>Regulamin</div>
            <div>
                <BsLinkedin />
                <BsFacebook />
            </div>
        </div>
    </div>
)

export default Footer
