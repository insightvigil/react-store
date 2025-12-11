import { useContext } from 'react';
import { Outlet, Link} from 'react-router';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import CrwnLogo from '../../assets/crown.svg?react'
import { UserContext } from '../../context/user.context';
import { CartContext, CartProvider } from '../../context/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import {NavigationContainer, NavLinks, NavLink, LogoContainer} from './_navigation.styles';

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  
  
  
  const {isCartOpen} = useContext(CartContext);

  

  return(
    <>
      <NavigationContainer>

        <LogoContainer to='/'>
            <CrwnLogo className="logo"/>
        </LogoContainer>
        
        <NavLinks>
            <NavLink to='/shop'>
                SHOP
            </NavLink>
            {
              currentUser ? (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) 
              :
              <NavLink to='/auth'>
                SIGN IN
              </NavLink>
            }
            <CartIcon/>

            
        </NavLinks>
        {isCartOpen && <CartDropdown/>}
        
      </NavigationContainer>
      <Outlet />
    </>
  )

}

export default Navigation;

