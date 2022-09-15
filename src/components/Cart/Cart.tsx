import "./cart.scss";
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { selectCart, removeProduct } from "../../store/cartSlice";
import remove from "../../assets/icons/remove.svg";

const Cart = () => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(selectCart);

    return (
        <div className="cart">
            <div className="cart-container">
                {cart.map(item => {
                    const product = item.product;
                    return (
                        <div className="cartItem" key={product.id}>
                            <div className="item-img">
                                <img src={product.image} />
                            </div>
                            <p className="item-name">{product.name}</p>
                            <div className="item-remove">
                                <img src={remove} alt="remove item" aria-label="remove item" onClick={() => dispatch(removeProduct(product))}/>
                            </div>
                            <div className="item-price">
                                <p className={product.sale ? "strikethrough" : ""}>€ {product.price}</p>
                                {product.sale ? <p className="sale-price">€ {product.salePrice}</p> : ""}
                            </div>
                            <p className="item-qty">{item.qty}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Cart;