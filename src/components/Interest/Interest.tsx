import { Link, useParams } from "react-router-dom";
import '../Theme/theme.scss';
import { tags } from "../../data/tags";
import { addProduct } from "../../store/cartSlice";
import { useAppDispatch } from '../../store/hooks';

const Interest = () => {
    const dispatch = useAppDispatch();
    const params = useParams();
    const index = tags.findIndex(obj => obj.path === params.interestId);

    return (
        <div className="theme-page">
            <h2>{tags[index].name}</h2>
            <div className="products-container">
                {tags[index].products.map(product => {
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
                                        : <button onClick={() => dispatch(addProduct(product))} aria-label="Add to cart">Add to cart</button>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Interest;