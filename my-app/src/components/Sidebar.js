import React from "react";
import css from "./css/Sidebar.module.css"


const Sidebar = () => {
    return (
        <div className = {css.sidebar}>
            <a href="#" target= "_blank">My photos </a>
            <a href="#">My Illustrations</a>
            <a href="#">My Paintings</a>
        </div>  
    )
}

export default Sidebar;