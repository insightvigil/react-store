import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';
import './_checkout-card.styles.scss'


const CheckOutCart = ({cartItem}) => {

    const {name, imageUrl, quantity, price} = cartItem;
    const {addItemToCart, removeItemToCart,clearItemFromCart} = useContext(CartContext)
    
    const addItemHandler = ()=> addItemToCart(cartItem);
    const removeItemHandler = ()=> removeItemToCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);
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