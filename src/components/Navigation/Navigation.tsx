import React, { useState, useEffect } from "react";
import "./navigation.scss";
import { FaSearch } from "react-icons/fa"
import { ImCart } from "react-icons/im";
import { VscAccount } from "react-icons/vsc"

export const Navigation = () => {
    return (
        <nav>
            <div>
                <ul>
                    <li className="nav-hover">Theme</li>
                    <li className="nav-hover">Interest</li>
                    <li className="nav-hover">Sale</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="nav-hover" aria-label="search"><span><FaSearch/></span> Search</li>
                    <li className="nav-hover" aria-label="cart"><span className="cart"><ImCart/></span> Cart</li>
                    <li className="nav-hover" aria-label="account"><span><VscAccount/></span> Login</li>
                </ul>
            </div>
        </nav>
    )
};