import { Link } from "react-router-dom";
import "./footer.scss";
import logo from "../../assets/logos/Lego.png";

const Footer = () => {
    return (
        <footer>
            <div className="info-container">
                <div className="about">
                    <h3>ABOUT</h3>
                    <Link to="/placeholder">About us</Link>
                    <Link to="/placeholder">Contact</Link>
                </div>
                <div className="legal">
                    <h3>LEGAL</h3>
                    <Link to="/placeholder">Terms & conditions</Link>
                    <Link to="/placeholder">Privacy</Link>
                </div>
                <div className="customer-service">
                    <h3>CUSTOMER SERVICE</h3>
                    <Link to="/placeholder">Payment methods</Link>
                    <Link to="/placeholder">Shipping & delivery</Link>
                    <Link to="/placeholder">Returns</Link>
                </div>
            </div>
            <img src={logo} alt="LEGO® logo"/>
        </footer>
    )
};

export default Footer;