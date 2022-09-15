import { Link } from 'react-router-dom';
import "./interests.scss";
import "../Themes/themes.scss";
import { tags } from "../../data/tags";

const Interest = () => {
    return (
        <div className="themes interest">
            <h2>Interest</h2>
            <div className="themes-container">
                {tags.map(tag => {
                    return (
                        <Link to={`/interest/${tag.path}`} className="theme" key={tag.name}>
                            <div className="tag-img">
                                <img className="theme-img" src={tag.image} alt={tag.name} loading="lazy"/>
                            </div>
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