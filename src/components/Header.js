import logo from "../images/logo.png"
import React from "react";
import "../styles/styles.css"

const Header = () => {
    return (
    <div>
        <header>
            <nav className="nav">
                <div className="fact">
                <img src={logo} alt="Logo"  className="logo"/>  
            <h1>ReactFact</h1>

                </div>
            
            <ul className="nav-item-class">
                <li className="list"><a href="#" >Pricing</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </nav>
        

        </header>
    
    </div>);
}
export default Header;