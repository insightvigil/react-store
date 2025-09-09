import {Route, Routes} from 'react-router';




import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication';
import Shop from './routes/shop/shop.component';
import CheckOut from './routes/checkout/checkout.component'

import './categories.styles.scss';




const App = () => {
 return(
  <Routes>
    <Route path='/' element={<Navigation/>}>

      <Route index element={<Home />}></Route>
      <Route path='shop/*' element={<Shop/>}></Route>
      <Route path='auth' element={<Authentication/>}></Route>
      <Route path='checkout' element={<CheckOut/>}></Route>

      

    </Route>
    
  </Routes>
 ) 
}

export default App
