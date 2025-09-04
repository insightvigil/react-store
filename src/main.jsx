import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router';

import App from './App.jsx'


import './index.css'
//Context
import { UserProvider } from './context/user.context.jsx';
import { ProductsProvider } from './context/products.context.jsx';
import {CartProvider} from './context/cart.context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
    
  </StrictMode>,
)
