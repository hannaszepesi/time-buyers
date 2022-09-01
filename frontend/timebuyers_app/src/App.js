import './App.css';
import './static/CSS/Home.css';

import Searchbar from "./components/Searchbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, {useState} from "react";
import './static/CSS/Home.css';
import Inside from "./components/Inside";
import {Outlet} from "react-router-dom";


export default function App({isLoggedIn}) {
    return (
        <body>
        <div className="flex-container-home">
            <div className="navbar"> <Navbar isLoggedIn={isLoggedIn}/> </div>
            <div className="middle-container">
            <div className="searchbar"> <Searchbar/> </div>
            <div className="inside"> <Outlet /></div>
            </div>
            <div className="footer"> <Footer /></div>
        </div>
        </body>

    );

}


