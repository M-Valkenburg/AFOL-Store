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

    return (
        <nav>
            <div className="nav-left">
                <label htmlFor="hamburger">
                    <img src={menu} alt="menu" aria-label="menu"/>
                </label>
                <input type="checkbox" className="hamburger" id="hamburger"/>
                <div className="nav-links">
                    <Link to="/themes" className="nav-hover">Themes</Link>
                    <Link to="/interest" className="nav-hover">Interest</Link>
                    <Link to="/sale" className="nav-hover">Sale</Link>
                </div>
            </div>
            <div className="nav-right">
                <Link to="" className="nav-hover" aria-label="search">
                    <img src={search} alt="search"></img><span className="nav-name"> Search</span>
                </Link>
                <Link to="/cart" className="nav-hover" aria-label="cart">
                    <img src={cart} alt="cart"></img><span className="nav-name"> Cart</span><span className="cartTotal"> ({cartTotal})</span>
                </Link>
                <Link to="" className="nav-hover" aria-label="account">
                    <img src={account} alt="account"></img><span className="nav-name"> Login</span>
                 </Link>
            </div>
        </nav>
    )
};

export default Navigation;