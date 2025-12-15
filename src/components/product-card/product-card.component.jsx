import './_product-card.styles.jsx';

import { useDispatch,useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action.js';
import { selectCartItems } from '../../store/cart/cart.selector.js';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { ProductCartContainer, FooterContainer, Name,Price } from './_product-card.styles.jsx';

const ProductCard = ({product}) => {
    const {name,price, imageUrl} = product;
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch();
    const addProductToCart = ()=> dispatch(addItemToCart(cartItems,product))
    
    
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