import React from 'react'
import {CgSearch} from "react-icons/cg"
import logo from "../img/logo.png"

function Header() {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            
            <div className="search">
                <CgSearch/>
            </div>
        </div>
    )
}

export default Header