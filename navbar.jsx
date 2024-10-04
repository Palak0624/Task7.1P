import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const NavBAR = () =>{
    return(
        <nav className="navbar">
            <div className="navbar-top">DEV@Deakin</div>
            <input 
                type="text"
                className="navbar-input"
                placeholder="Search"
            />
            <div className="link">
                <button className="post">Post</button>
                <Link to="/login">
                    <button className="post">Log In</button>
                </Link>
            </div>
        </nav>
    );
}

export default NavBAR;