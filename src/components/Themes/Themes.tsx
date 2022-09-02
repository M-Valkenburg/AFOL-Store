import "./themes.scss";
import { themes } from "../../data/themes";

export const Themes = () => {
    return (
        <div className="themes">
            <h2>Themes</h2>
            <div className="themes-container">
                {themes.map(theme => {
                    return (
                        <div className="theme" key={theme.name}>
                            <img className="theme-img" src={theme.img} alt={theme.name} loading="lazy"/>
                            <div className="logo-container">
                                <img className="logo" src={theme.logo} alt={theme.name} loading="lazy"/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};