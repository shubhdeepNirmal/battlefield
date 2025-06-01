import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar=()=>{
    return (
        <div className="browser_breadcrumb">
            <div className="previous1">
                <a href=" " className="browser_breadcrumb-back">
                <img 
                src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab21dde67c22de2b6d61b_back.svg"
                alt="Back"
                className="browser_breadcrumb-back-icon"
                />
                </a>

                <a href=""
                className="browser_breadcrumb-multiplayer"
                >MULTIPLAYER
                </a>
                <div className="browser_breadcrumb-bar">/</div>
                <a href="" 
                className="browser_breadcrumb-serverbrowser">
                SERVER BROWSER
                </a>
                <div className="browser_breadcrumb-bar">/</div>  
            </div>

            <div className="server_info_breadcrumb">
                SERVER INFO
             </div>
        </div>
    );
};
export default Navbar;