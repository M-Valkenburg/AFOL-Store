import { useState } from 'react';
import { useParams } from "react-router-dom";
import "./product.scss";
import ReactMarkdown from 'react-markdown';
import { addProduct } from "../../store/cartSlice";
import { useAppDispatch } from '../../store/hooks';
import products from "../../data/products";
import rehypeRaw from "rehype-raw";
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";

const Product = () => {
    const dispatch = useAppDispatch();
    const params = useParams();  
    const index = products.findIndex(obj => obj.id.toString() === params.productId);
    const product = products[index];

    const [qty, setQty] = useState<number>(1);

    const decrement = () => {
        if (qty === 1 || qty < 1) return;
        setQty(qty => qty -= 1);
    };

    const increment = () => {
        if (qty === product.stock) return;
        setQty(qty => qty += 1);
    };

    const handleChange = (value: number) => {
        setQty(qty => qty = value);
    }

    return (
        <div className="product-page">
            <div className="product-container">
                <div className="product-content">
                    <div className="product-image">
                        <img src={product.image} alt={product.name}/>
                    </div>
                    <div className="product-info">
                        {product.sale ? <span className="product-discount">{product.discount}% OFF</span> : ''}
                        <h3>{product.name}</h3>
                        <div className="product-price">
                            <p className={product.sale ? "strikethrough" : ""}>€ {product.price}</p>
                            {product.sale ? <p className="sale-price">{product.salePrice}</p> : ""}
                        </div>
                        {
                            !product.released
                                ? <span className="unreleased">Coming soon!</span>
                                : product.released && product.stock === 0
                                    ? <span className="unavailable">Out of stock</span>
                                    : <span className="available">Available now</span>
                        }
                        <div className="product-qty">
                            <button aria-label="decrease quantity" onClick={decrement}>
                                <img src={minus} alt="decrease quantity"/>
                            </button>
                            <span className="value">{qty}</span>
                            <button aria-label="increase quantity" onClick={increment}>
                                <img src={plus} alt="increase quantity"/>
                            </button>
                            <select onChange={(e) => handleChange(Number(e.target.value))}>
                                {[...Array(product.stock)].map((_,i) => {
                                    return <option value={i + 1}>{i + 1}</option>
                                })}
                            </select>
                        </div>
                        <span className="product-stock">In stock: {product.stock}</span>
                        {
                            !product.released 
                                ? ""
                                : product.released && product.stock === 0 
                                    ? <button disabled>Add to cart</button>
                                    : <button 
                                        className="product-to-cart" 
                                        aria-label="Add to cart"
                                        onClick={() => dispatch(addProduct([product, qty]))} 
                                    >Add to cart</button>
                        }
                        <p className="set-id">Set id: {product.id}</p>
                        <p className="pieces">Pieces: {product.pieces}</p>
                    </div>
                </div>
                <div className="product-description">
                    {product.description.map((desc: string, index: number) => {
                        return (
                            <ReactMarkdown key={index} children={desc} rehypePlugins={[rehypeRaw]}/>
                        )})}
                </div>
            </div>
        </div>
    )
};

export default Product;