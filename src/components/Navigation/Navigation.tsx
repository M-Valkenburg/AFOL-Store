import { Link } from "react-router-dom";
import "./navigation.scss";
import search from "../../assets/icons/search.svg";
import cart from "../../assets/icons/cart.svg";
import account from "../../assets/icons/account.svg";

export const Navigation = () => {
    return (
        <nav>
            <div>
                <Link to="/themes" className="nav-hover">Themes</Link>
                <Link to="/" className="nav-hover">Interest</Link>
                <Link to="/" className="nav-hover">Sale</Link>
            </div>
            <div>
                <Link to="" className="nav-hover" aria-label="search">
                    <img src={search} alt="search"></img> Search
                </Link>
                <Link to="" className="nav-hover" aria-label="cart">
                    <img src={cart} alt="cart"></img> Cart
                </Link>
                <Link to="" className="nav-hover" aria-label="account">
                    <img src={account} alt="account"></img> Login
                </Link>
            </div>
        </nav>
    )
};