import { Link } from "react-router-dom";
import "./cart.scss";
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { 
    selectCart, selectItems, selectValue,
    selectVAT, selectShipping, selectTotal,
    removeProduct, increment, decrement,
    selectQty
} from "../../store/cartSlice";
import { Product } from "../../data/products/_productType";
import cartIcon from "../../assets/icons/cart.svg";
import remove from "../../assets/icons/remove.svg";
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";

const Cart = () => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(selectCart);
    const totalItems = useAppSelector(selectItems);
    const totalPrice = useAppSelector(selectValue);
    const totalTax = useAppSelector(selectVAT);
    const shipping = useAppSelector(selectShipping);
    const orderTotal = useAppSelector(selectTotal);

    const getValue = (product: Product) => {
        const index: number = cart.findIndex(i => i.product === product);
        return cart[index].qty.toString();
    }

    if (totalItems === 0) {
        return (
            <div className="cart">
                <div className="cart-container">
                    <div className="empty-cart">
                        <img src={cartIcon} alt="cart icon"/>
                        <p>Your cart is empty</p>
                        <Link to="/themes">Start Shopping &#10140;</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="cart">
            <div className="cart-container">
                <div className="cart-items">
                {cart.map(item => {
                    const product = item.product;
                        return (
                            <div className="cart-item" key={product.id}>
                                <div className="item-img">
                                    <img src={product.image} alt={product.name}/>
                                </div>
                                <p className="item-name">{product.name}</p>
                                <div className="item-remove">
                                    <img src={remove} alt="remove item" aria-label="remove item" onClick={() => dispatch(removeProduct(product))}/>
                                </div>
                                <div className="item-price">
                                    <p className={product.sale ? "strikethrough" : ""}>??? {product.price}</p>
                                    {product.sale ? <p className="sale-price">??? {product.salePrice}</p> : ""}
                                </div>
                                <div className="item-qty">
                                    <button aria-label="decrease quantity" onClick={() => dispatch(decrement(product))}>
                                        <img src={minus} alt="decrease quantity"/>
                                    </button>
                                    <span className="value">{getValue(product)}</span>
                                    <button aria-label="increase quantity" onClick={() => dispatch(increment(product))}>
                                        <img src={plus} alt="increase quantity"/>
                                    </button>
                                    <select onChange={(e) => dispatch(selectQty([product, Number(e.target.value)]))}>
                                        {[...Array(product.stock)].map((_,i) => {
                                            return <option value={i + 1}>{i + 1}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="cart-totals">
                    <h3>Order Summary</h3>
                    <div className="border"/>
                    <p>Total items:<span>{totalItems}</span></p>
                    <p>Order value:<span>??? {totalPrice.toFixed(2)}</span></p>
                    <p>Shipping: {totalPrice >= 150 ? <span className="shipping">Free shipping</span> : <span>{shipping}</span>}</p>
                    <p className="order-total">Order total:<span>??? {orderTotal.toFixed(2)}</span></p>
                    <p className="tax-total">Inclusive of ??? {totalTax.toFixed(2)} VAT</p>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    )
};

export default Cart;