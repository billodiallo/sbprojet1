import logo from "../images/logo.png"
import React from "react";
import "../styles/styles.css"

const Header = () => {
    return (
    <div>
        <header>
            <nav className="nav">
            <img src={logo} alt="Logo"  className="logo"/>
            <ul className="nav-item-class">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </nav>
        

        </header>
    
    </div>);
}
export default Header;