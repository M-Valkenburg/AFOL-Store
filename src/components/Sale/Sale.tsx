import { Link } from "react-router-dom";
import '../Theme/theme.scss';
import products from "../../data/products";
import { addProduct } from "../../store/cartSlice";
import { useAppDispatch } from '../../store/hooks';

const Sale = () => {
    const dispatch = useAppDispatch();
    const saleProducts = products.filter(product => product.sale === true);

    return (
        <div className="theme-page">
            <h2>Sale</h2>
            <div className="products-container">
                {saleProducts.map(product => {
                    return (
                        <div className="product-tile" key={product.id}>
                            <Link to={`/product/${product.id}`} className="prod-img">
                                <img src={product.image} alt={product.name}/>
                                <span className="prod-discount">-{product.discount}%</span>
                            </Link>
                            <div className="prod-name-container">
                                <Link to={`/product/${product.id}`}>{product.name}</Link>
                            </div>
                            <div className="prod-price">
                                <p className={product.sale ? "strikethrough" : ""}>€ {product.price}</p>
                                <p className="sale-price">{product.salePrice}</p>
                            </div>
                            {
                                product.released && product.stock === 0 
                                    ? <button className="no-stock" disabled>Out of stock</button>
                                    : <button onClick={() => dispatch(addProduct([product, 1]))} aria-label="Add to cart">Add to cart</button>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Sale;