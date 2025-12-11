import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import {Link, useNavigate} from 'react-router';
import {useContext} from 'react';
import { CartContext } from '../../context/cart.context';

import {CartDropdownContainer, EmptyMessage, CartItems} from './_cart-dropdown.styles.jsx'


const CartDropdown = () => {

   
    const {cartItems} = useContext(CartContext)

    const navigate = useNavigate();
    
    const goToCheckOutHandler = () => {
        navigate('/checkout');
    }
    return(
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ?  
                    cartItems.map((item) => <CartItem key={item.id} cartItem ={item}/>) :
                    <EmptyMessage>Your Cart is Empty</EmptyMessage>
                }
                <Button onClick={goToCheckOutHandler} >GO TO CHECKOUT</Button>
            </CartItems>
        </CartDropdownContainer>
    )
}

export default CartDropdown;