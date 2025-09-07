import { useContext } from 'react';
import { Outlet,Link } from 'react-router';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import CrwnLogo from '../../assets/crown.svg?react'
import { UserContext } from '../../context/user.context';
import { CartContext, CartProvider } from '../../context/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './_navigation.styles.scss';

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  

  return(
    <>
      <div className='navigation'>

        <Link className='logo-container' to='/'>
            <CrwnLogo className="logo"/>
        </Link>
        
        <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            {
              currentUser ? (<Link className='nav-link' onClick={signOutUser}>SIGN OUT</Link>) 
              :
              <Link className='nav-link' to='/auth'>
                SIGN IN
              </Link>
            }
            <CartIcon/>

            
        </div>
        {isCartOpen && <CartDropdown/>}
        
      </div>
      <Outlet />
    </>
  )

}

export default Navigation;