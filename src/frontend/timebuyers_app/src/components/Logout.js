import React from "react";

function Logout({setLoggedIn}){
    setLoggedIn(false);
    localStorage.clear();
}

export default Logout;