import { Link, useParams } from "react-router-dom";
import './theme.scss';
import { themes } from "../../data/themes";

const Theme = () => {
    let parmas = useParams();
    const index = themes.findIndex(obj => obj.path === parmas.themeId);

    return (
        <div className="theme-page">
            <h2>{themes[index].name}</h2>
            <div className="products-container">
                {themes[index].products.map(product => {
                    return (
                        <div className="product-tile" key={product.id}>
                            <Link to={`/product/${product.id}`} className="prod-img">
                                <img src={product.image} alt={product.name}/>
                                {product.sale ? <span className="prod-discount">-{product.discount}%</span> : ""}
                            </Link>
                            <div className="prod-name-container">
                                <Link to={`/product/${product.id}`}>{product.name}</Link>
                            </div>
                            <div className="prod-price">
                                <p className={product.sale ? "strikethrough" : ""}>€ {product.price}</p>
                                {product.sale ? <p className="sale-price">{product.salePrice}</p> : ""}
                            </div>
                            {
                                !product.released 
                                    ? <button className="comming-soon" disabled>Coming soon</button>
                                    : product.released && product.stock === 0 
                                        ? <button className="no-stock" disabled>Out of stock</button>
                                        : <button>Add to cart</button>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Theme;