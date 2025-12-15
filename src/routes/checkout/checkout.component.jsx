import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import CheckOutCart from "../../components/checkout-card/checkout-card.component"

import './_checkout.styles.scss'

const CheckOut = () => {
    const cartItems = useSelector(selectCartItems)    
    const cartTotal = useSelector(selectCartTotal)
    
    return(
    <div className="checkout-container">
        <div className="checkout-header">
            <div className="header-block"><span>Product</span></div>
            <div className="header-block"><span>Description</span></div>
            <div className="header-block"><span>Quantity</span></div>
            <div className="header-block"><span>Price</span></div>
            <div className="header-block"><span>Remove</span></div>
        </div>
        
            
       
    {
        cartItems.map((cartItem) => (
             <CheckOutCart className="Card" key={cartItem.id} cartItem = {cartItem}></CheckOutCart>
        ))
    }   
    <span className="total">Total:${cartTotal}</span>

       
    </div>
    )
}

export default CheckOut