import React from "react";
import "./header.scss";
import banner from "../../assets/banner/banner.webp"

export const Header = () => {
    return (
        <header>
            <img src={banner} alt="banner" />
        </header>
    )
};