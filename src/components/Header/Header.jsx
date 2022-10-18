import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="header-container">
            <div className="header-components">
                <div className="header-left">
                    <span>ICONE</span>
                </div>
                <div className="header-right">
                    <ul>
                        <Link to="/" style={{textDecoration: "none"}}><li className="li-home">HOME</li></Link>
                        <Link to="/register" style={{textDecoration: "none"}}><li className="li-register">REGISTER</li></Link>
                        <Link to="/login" style={{textDecoration: "none"}}><li className="li-login">LOGIN</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}