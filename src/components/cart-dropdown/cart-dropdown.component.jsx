import Button from '../button/button.component'

import '../../categories.styles.css'

const CartDropdown = () => {
    return(
        <div className="cart-dropdown-container">
            <div className='cart-items'>
                <Button>GO TO CHECKOUT</Button>
            </div>
        </div>
    )
}

export default CartDropdown;