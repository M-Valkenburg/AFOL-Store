import { Link } from "react-router-dom";
import "./404.scss";
import error404 from "../../assets/errors/404.webp";

const ErrorPage = () => {
    return (
        <div className="error-page">
            <div className="error-message">
                <div>
                    <span>Page not found</span>
                    <p>The link to this page may be incorrect or out of date.</p>
                    <Link to="/themes">Continue shopping &#10140;</Link>
                </div>
                <img src={error404} alt="404: Page not found"/>
            </div>
        </div>
    )
};

export default ErrorPage;