import * as React from "react";
import logo from '@/assets/images/Logo.svg';

const HeaderPublic = () => (
    <div className="headerPublic">
        <div className="headerPublic__wrapper">
            <div className="headerPublic__logo">
                <img src={logo}/>
            </div>
        </div>
    </div>
)

export default HeaderPublic
