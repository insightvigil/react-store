import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router';

import App from './App.jsx'


import './index.css'
import { UserProvider } from './context/user.context.jsx';
import { CartProvider } from './context/cart.context.jsx';

import { store } from './store/store.js';

import {Provider} from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <Provider store={store}>
        <BrowserRouter>
        
            <CartProvider>
              <App />
            </CartProvider>
         
        </BrowserRouter>
      </Provider>
    
  </StrictMode>,
)
