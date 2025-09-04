import { useState, createContext } from "react";

import PRODUCTS from '../shop-data.json';

//Initialize Context
export const ProductsContext = createContext({
    products: [],
});

//Intialize Provider 
export const ProductsProvider = ({children})=> {
    const [products,setProducts] = useState(PRODUCTS);
    const value= {products};
    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}

//<ProviderContext.Provider>{children}</ProviderContext.Provider>