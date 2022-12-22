import * as React from "react";
import logo from '@/assets/images/Logo.svg';
import {BsHeart, BsBasket, BsPerson, BsGear} from "react-icons/bs";

const Header = () => (
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
            </ul>
        </div>
    </div>
)

export default Header
