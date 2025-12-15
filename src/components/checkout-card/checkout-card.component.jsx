import { useSelector,useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart,removeItemFromCart,clearItemFromCart } from '../../store/cart/cart.action';
import './_checkout-card.styles.scss'


const CheckOutCart = ({cartItem}) => {

    const {name, imageUrl, quantity, price} = cartItem;
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()


    const addItemHandler = ()=> dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = ()=> dispatch(removeItemFromCart(cartItems, cartItem));
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    return (
            <div className='card'>
                <figure className='image-container'>
                    <img src={imageUrl} alt="img" />
                </figure>
                <span className="name">{name}</span>
                
                    <span className="quantity">
                        <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                            <span className="value">{quantity}</span>
                        <div className='arrow' onClick={addItemHandler}>&#10095;</div>
                    </span>
                
                <span className="price">${price}</span>
                <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
            </div>      
           
    )
}

export default CheckOutCart;