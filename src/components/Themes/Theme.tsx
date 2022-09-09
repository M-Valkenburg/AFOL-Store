import { Link, useParams } from "react-router-dom";
import './theme.scss';
import { themes } from "../../data/themes";

const Theme = () => {
    let theme = useParams();

    const index = themes.findIndex(obj => {
        return obj.path === theme.themeId;
    })

    return (
        <div className="theme-page">
            <h2>{themes[index].name}</h2>
            <div className="products-container">
                {themes[index].products.map(product => {
                    return (
                        <div className="product-tile" key={product.id}>
                            <Link to={`/product/${product.id}`} className="prod-img">
                                <img src={product.image} alt={product.name}/>
                            </Link>
                            <div className="prod-name-container">
                                <Link to={`/product/${product.id}`}>{product.name}</Link>
                            </div>
                            <div className="prod-price">
                                <p>€ {product.price}</p>
                                <p className="sale-price"></p>
                            </div>
                            <button>Add to cart</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Theme;