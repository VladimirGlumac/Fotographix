import React, { useContext } from 'react';
import { ShopContext } from '../../../context/shopcart';

export default function Products(props) {
    const { id, productName, price, productImage, sale, discount } = props.data;

    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];
    let discountedPrice = price;

    if (sale && typeof discount === 'number' && discount >= 0 && discount <= 1) {
        discountedPrice = price - price * discount;
    }

    const discountPercentage = sale && typeof discount === 'number'
        ? `${(discount * 100).toFixed(0)}% OFF`
        : '';

    return (
        <div className='producs-container-one'>
            <img src={productImage} alt="" className='product-images' />
            <div className='product-container-two'>
                <h2 className='camera-name'>{productName}</h2>

                <h3 className='discount-percentage'>{discountPercentage}</h3>
                {sale ? (
                    <>
                        <p className='original-price' style={{ textDecoration: 'line-through' }}>{price.toFixed(2)}$</p>
                        <p className='discounted-price'>{discountedPrice.toFixed(2)}$</p>
                    </>
                ) : (
                    <p>{price}$</p>
                )}
                <button className='addToCartButton' onClick={() => addToCart(id)}>
                    Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                </button>
            </div>
        </div>
    );
}
