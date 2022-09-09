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
                                {product.sale ? <div className="discount-percentage">-{product.discount}%</div> : ""}
                            </Link>
                            <div className="prod-name-container">
                                <Link to={`/product/${product.id}`}>{product.name}</Link>
                            </div>
                            <div className="prod-price">
                                <p className={product.sale ? "strikethrough" : ""}>€ {product.price}</p>
                                {product.sale ? <p className="sale-price">{product.salePrice}</p> : ""}
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