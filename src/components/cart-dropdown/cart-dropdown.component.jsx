import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import {Link, useNavigate} from 'react-router';
import {useContext} from 'react';
import { CartContext } from '../../context/cart.context';

import './_cart-dropdown.styles.scss'


const CartDropdown = () => {

   
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate();
    const goToCheckOutHandler = () => {
        navigate('/checkout');
    }
    return(
        <div className="cart-dropdown-container">
            <div className='cart-items'>
                {cartItems.map((item) => <CartItem key={item.id} cartItem ={item}/>)}
                
                <Button onClick={goToCheckOutHandler} >GO TO CHECKOUT</Button>
            </div>
        </div>
    )
}

export default CartDropdown;