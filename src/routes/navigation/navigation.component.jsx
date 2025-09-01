import { useContext } from 'react';
import { Outlet,Link } from 'react-router';

import CrwnLogo from '../../assets/crown.svg?react'
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';


import '../../categories.styles.css';

const Navigation = () => {
  const {currentUser,setCurrentUser} = useContext(UserContext);
  console.log(currentUser);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }

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
              currentUser ? (<Link className='nav-link' onClick={signOutHandler}>SIGN OUT</Link>) 
              :
              <Link className='nav-link' to='/auth'>
                SIGN IN
              </Link>
            }

            
        </div>
      </div>
      <Outlet />
    </>
  )

}

export default Navigation;