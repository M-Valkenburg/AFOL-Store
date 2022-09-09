import { useLocation } from "react-router-dom";
import './theme.scss';
import { themes } from "../../data/themes";

const Theme = () => {
    const location = useLocation();
    const pathName: string = location.pathname;
    const strippedPath = pathName.replace('/themes/', '');
    const theme = strippedPath.charAt(0) + strippedPath.slice(1);

    const index = themes.findIndex(obj => {
        return obj.path === theme;
    })

    return (
        <div className="theme-page">
            <h2>{themes[index].name}</h2>
            <div className="products-container">
                {themes[index].products.map(product => {
                    return (
                        <div className="product-tile" key={product.id}>
                            <div className="prod-img">
                                <img src={product.image} alt={product.name}/>
                            </div>
                            <div className="prod-name-container">
                                <h4>{product.name}</h4>
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