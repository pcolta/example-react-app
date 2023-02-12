import * as React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
    <div className="sidebar">
        <div className="sidebar__wrapper">
        <div className="sidebar__nav">
            <div className="sidebar__link"><Link to="/">Link 1</Link></div>
            <div className="sidebar__link"><Link to="/">link 2</Link></div>
            <div className="sidebar__link"><Link to="/">link 3</Link></div>
            <div className="sidebar__link"><Link to="/">link 4</Link></div>
            <div className="sidebar__link"><Link to="/">link 5</Link></div>
            <div className="sidebar__link"><Link to="/">link 6</Link></div>
        </div>
        </div>
    </div>
)

export default Sidebar
