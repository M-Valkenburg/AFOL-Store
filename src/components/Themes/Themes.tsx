import { Link } from 'react-router-dom';
import "./themes.scss";
import { themes } from "../../data/themes";

const Themes = () => {
    return (
        <div className="themes">
            <h2>Themes</h2>
            <div className="themes-container">
                {themes.map(theme => {
                    const pathName: string = theme.name.replace(/\s+/g, '').toLowerCase();
                    return (
                        <Link to={`/themes/${pathName}`} className="theme" key={theme.name}>
                            <img className="theme-img" src={theme.img} alt={theme.name} loading="lazy"/>
                            <div className="logo-container">
                                <img className="logo" src={theme.logo} alt={theme.name} loading="lazy"/>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
};

export default Themes;