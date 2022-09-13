import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import "./product.scss";
import products from "../../data/products";
import rehypeRaw from "rehype-raw";

const Product = () => {
    const params = useParams();  
    const index = products.findIndex(obj => obj.id.toString() === params.productId);
    const product = products[index];

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
                        {
                            !product.released 
                                ? ""
                                : product.released && product.stock === 0 
                                    ? <button disabled>Add to cart</button>
                                    : <button>Add to cart</button>
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