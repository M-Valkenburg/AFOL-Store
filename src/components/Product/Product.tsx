import { useParams } from "react-router-dom";
import "./product.scss";

const Product = () => {
    let params = useParams();

    return (
        <div className="product-page">
            <p>{params.productId}</p>
        </div>
    )
};

export default Product;