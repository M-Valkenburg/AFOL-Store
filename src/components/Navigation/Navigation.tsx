import { Link } from "react-router-dom";
import { useAppSelector } from '../../store/hooks';
import { selectItems } from "../../store/cartSlice";
import "./navigation.scss";
import menu from "../../assets/icons/menu.svg"
import search from "../../assets/icons/search.svg";
import cart from "../../assets/icons/cart.svg";
import account from "../../assets/icons/account.svg";

const Navigation = () => {
    const cartTotal = useAppSelector(selectItems);

    let dropdown = document.getElementById('menu-links') as HTMLElement;

    const handleClick = () => {
        if (dropdown.style.visibility === 'hidden' || dropdown.style.visibility === '') {
            dropdown.style.visibility = 'visible';
            dropdown.style.maxHeight = '160px';
            dropdown.style.transition = 'max-height .1s ease-in';
        } else {
            dropdown.style.visibility = 'hidden';
            dropdown.style.maxHeight = '0px';
            dropdown.style.transition = 'max-height .1s ease-out';
        }
    };

    const closeNav = () => {
        dropdown.style.visibility = 'hidden';
        dropdown.style.maxHeight = '0px';
        dropdown.style.transition = 'max-height .1s ease-out';   
    };

    return (
        <nav className="nav-menu">
            <div>
                <div className="menu-button" onClick={handleClick}>
                    <img src={menu} alt="menu"/>
                </div>
                <div id="menu-links" onMouseLeave={closeNav}>
                    <Link to="/themes" className="nav-hover" onClick={handleClick}>Themes</Link>
                    <Link to="/interest" className="nav-hover" onClick={handleClick}>Interest</Link>
                    <Link to="/sale" className="nav-hover" onClick={handleClick}>Sale</Link>
                </div>
            </div>
            <div className="nav-icons">
                <Link to="" className="nav-hover" aria-label="search">
                    <img src={search} alt="search"></img><span className="nav-name"> Search</span>
                </Link>
                <Link to="/cart" className="nav-hover" aria-label="cart">
                    <img src={cart} alt="cart"></img><span className="nav-name"> Cart <span className="cartTotal">({cartTotal})</span></span>
                </Link>
                <Link to="" className="nav-hover" aria-label="account">
                    <img src={account} alt="account"></img><span className="nav-name"> Login</span>
                </Link>
            </div>
        </nav>
    )
};

export default Navigation;