import { Link } from "react-router-dom";
import "./header.scss";
import banner from "../../assets/banner/banner.webp"

export const Header = () => {
    return (
        <header>
            <Link to="/"><img src={banner} alt="banner" aria-label="home"/></Link>
        </header>
    )
};