import { Link } from "react-router-dom";
import "./navigation.scss";
import menu from "../../assets/icons/menu.svg"
import search from "../../assets/icons/search.svg";
import cart from "../../assets/icons/cart.svg";
import account from "../../assets/icons/account.svg";

export const Navigation = () => {
    const handleClick = () => {
        let dropdown = document.getElementById('menu-links') as HTMLElement;
        
        dropdown.style.visibility === 'hidden' || dropdown.style.visibility === ''
            ? dropdown.style.visibility = 'visible'
            : dropdown.style.visibility = 'hidden';
    };

    return (
        <nav className="nav-menu">
            <div>
                <div className="menu-button" onClick={handleClick}>
                    <img src={menu} alt="menu"/>
                </div>
                <div id="menu-links">
                    <Link to="/themes" className="nav-hover">Themes</Link>
                    <Link to="/" className="nav-hover">Interest</Link>
                    <Link to="/" className="nav-hover">Sale</Link>
                </div>
            </div>
            <div className="nav-icons">
                <Link to="" className="nav-hover" aria-label="search">
                    <img src={search} alt="search"></img><span className="nav-name"> Search</span>
                </Link>
                <Link to="" className="nav-hover" aria-label="cart">
                    <img src={cart} alt="cart"></img><span className="nav-name"> Cart</span>
                </Link>
                <Link to="" className="nav-hover" aria-label="account">
                    <img src={account} alt="account"></img><span className="nav-name"> Login</span>
                </Link>
            </div>
        </nav>
    )
};