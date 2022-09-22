import { Link } from "react-router-dom";
import "./footer.scss";
import logo from "../../assets/logos/Lego.png";

const Footer = () => {
    return (
        <footer>
            <div className="info-container">
                <div className="about">
                    <h3>ABOUT</h3>
                    <Link to="/">About us</Link>
                    <Link to="/">Contact</Link>
                </div>
                <div className="legal">
                    <h3>LEGAL</h3>
                    <Link to="/">Terms & conditions</Link>
                    <Link to="/">Privacy</Link>
                </div>
                <div className="customer-service">
                    <h3>CUSTOMER SERVICE</h3>
                    <Link to="/">Payment methods</Link>
                    <Link to="/">Shipping & delivery</Link>
                    <Link to="/">Returns</Link>
                </div>
            </div>
            <img src={logo} alt="LEGO® logo"/>
        </footer>
    )
};

export default Footer;