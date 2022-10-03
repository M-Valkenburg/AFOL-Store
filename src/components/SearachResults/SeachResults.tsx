import { Link } from "react-router-dom";
import '../Theme/theme.scss';
import products from "../../data/products";
import { addProduct } from "../../store/cartSlice";
import { selectSearchTerm } from "../../store/productSlice";
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const SearchResults = () => {
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector<string>(selectSearchTerm);

    const results = products.filter(product => {
        return product.id.toString().includes(searchTerm) || product.name.toLowerCase().includes(searchTerm)
    });

    return (
        <div className="theme-page">
            <div className="products-container">
                {results.map(product => {
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
                                        : <button onClick={() => dispatch(addProduct([product, 1]))} aria-label="Add to cart">Add to cart</button>
                            }
                        </div>
                        )
                    })}
            </div>
        </div>
    )
};

export default SearchResults;