
import React from "react";
import  ReactDOM  from "react-dom/client";
import './ch-3.css'

const logo = require("./assets/logo/logo.png") 

const Header = () => (
        <header className="header-container">
            <div className="header-logo">
                <img src={logo}/>
            </div>
            <div className="header-input">
                <input type="search" id="search" name="header-search" placeholder="Search here"/>
            </div>
            <div className="header-user">
               <span></span>
            </div>
        </header>
    )

const react_root = ReactDOM.createRoot(document.getElementById("ch-3"));

react_root.render(<Header/>);