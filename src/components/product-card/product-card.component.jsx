import {useContext} from 'react';

import { CartContext } from '../../context/cart.context';
import './_product-card.styles.jsx';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { ProductCartContainer, FooterContainer, Name,Price } from './_product-card.styles.jsx';
const ProductCard = ({product}) => {
    const {name,price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);
    
    const addProductToCart = ()=> addItemToCart(product)
    return(
        <ProductCartContainer>
            <img src={imageUrl} alt={`${name}`} />
            <FooterContainer>
                <Name className="name">{name}</Name>
                <Price>{price}</Price>
            </FooterContainer>
            <Button buttonType={ BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        </ProductCartContainer>
    )
}

export default ProductCard;