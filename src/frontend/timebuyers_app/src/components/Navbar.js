import '../static/CSS/Navbar.css';
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import LoggedInOrNot from "./LoggedInOrNot";
import {createContext, useContext} from "react";


export const LogContext = createContext(localStorage.getItem("username" ) !== null);

function Navbar(){
    const isLoggedIn = useContext(LogContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"}  className="navbar-brand">TimeBuyers</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"about-us"} className="nav-link">About us</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="src/frontend/timebuyers_app/src/components/Navbar#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Buyers and Taskers
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to="/users/buyers" className="dropdown-item">Buyers</Link>

                            <Link to="/users/taskers" className="dropdown-item">Taskers</Link>

                            <Link to="/users/all" className="dropdown-item">All</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="contact-us" className="nav-link">Contact us </Link>
                    </li>
                </ul>
                <LogContext.Provider value={isLoggedIn}>
                <LoggedInOrNot id="log" isLoggedIn={isLoggedIn} />
                </LogContext.Provider>
            </div>
        </nav>
    )
}

export default Navbar;