import * as React from "react";
import logo from '@/assets/images/Logo.svg';
import {BsHeart, BsBasket, BsPerson, BsGear} from "react-icons/bs";
import useAuth from "../../hooks/useAuth";

export default function Header() {
    const {logout} = useAuth();
    return (
        <div className="header">
            <div className="header__wrapper">
                <div className="header__logo">
                    <img src={logo}/>
                </div>
                <ul>
                    <li className="header__link"><BsBasket/></li>
                    <li className="header__link"><BsHeart/></li>
                    <li className="header__link"><BsGear/></li>
                    <li className="header__link"><BsPerson/></li>
                    <li className="header__link" onClick={logout}>Logout</li>
                </ul>
            </div>
        </div>
    )

}
