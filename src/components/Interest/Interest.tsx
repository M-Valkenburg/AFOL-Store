import { Link } from 'react-router-dom';
import "./interest.scss";
import "../Themes/themes.scss";
import { tags } from "../../data/tags";

const Interest = () => {
    return (
        <div className="themes interest">
            <h2>Interest</h2>
            <div className="themes-container">
                {tags.map(tag => {
                    return (
                        <Link to={`/interest/${tag.name.toLowerCase().replace(" ", "")}`} className="theme" key={tag.name}>
                            <img className="theme-img" src={tag.image} alt={tag.name} loading="lazy"/>
                            <div className="logo-container">
                                <span>{tag.name}</span>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
};

export default Interest;