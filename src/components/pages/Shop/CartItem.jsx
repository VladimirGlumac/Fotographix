import React, { useContext } from 'react'
import { ShopContext } from '../../../context/shopcart';

export default function CartItem(props) {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext)


    return (
        <div className='product-in-cart'>
            <img src={productImage} alt="" className='produc-img' />
            <div className='product-description'>
                <h2>{productName}</h2>
                <p>Price: {price * cartItems[id]}$</p>
                <div className='countHandler'>
                    <button className='value-button' onClick={() => removeFromCart(id)}> - </button>
                    <input className='value-input' value={cartItems[id]} />
                    <button className='value-button' onClick={() => addToCart(id)}> + </button>

                </div>

            </div>
        </div>
    )
}
