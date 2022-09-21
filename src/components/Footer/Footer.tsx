import "./footer.scss";
import logo from "../../assets/logos/Lego.png";

const Footer = () => {
    return (
        <footer>
            <div className="info-container">
                <div className="about">
                    <h3>ABOUT</h3>
                    <a href="">About us</a>
                    <a href="">Contact</a>
                </div>
                <div className="legal">
                    <h3>LEGAL</h3>
                    <a href="">Terms & conditions</a>
                    <a href="">Privacy</a>
                </div>
                <div className="customer-service">
                    <h3>CUSTOMER SERVICE</h3>
                    <a href="">Payment Methods</a>
                    <a href="">Shipping & delivery</a>
                    <a href="">Returns</a>
                </div>
            </div>
            <img src={logo} alt="LEGO® logo"/>
        </footer>
    )
};

export default Footer;