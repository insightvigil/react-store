import { useContext } from "react";

import { ProductsContext } from "../../context/products.context";

import ProductCard from "../../components/product-card/product-card.component";

import '../../categories.styles.css';

const Shop = () => {

    const {products} = useContext(ProductsContext)
    return(
        <div className="products-container">
        {
            products.map((product)=> (
                <ProductCard key={product.id} product={product}></ProductCard>
            ))
        }
        </div>
    )
}

export default Shop;