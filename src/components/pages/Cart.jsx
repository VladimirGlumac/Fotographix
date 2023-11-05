import React, { useContext, useState } from 'react';
import { PRODUCTS } from '../Data/Products';
import { ShopContext } from '../../context/shopcart';
import CartItem from './Shop/CartItem';
import Select from 'react-dropdown-select';

const options = [
    {
        value: 1,
        label: "Regular Shipment 5$"
    },
    {
        value: 2,
        label: "Fast Shipment 10$"
    }
];

const REGULAR_SHIPMENT_PRICE = 5;
const FAST_SHIPMENT_PRICE = 10;

const Cart = () => {
    const { cartItems } = useContext(ShopContext);
    const [selectedShipment, setSelectedShipment] = useState(null);

    // Filter out products with a count of zero from the cartItems
    const nonEmptyCartItems = Object.keys(cartItems).filter((productId) => cartItems[productId] !== 0);

    // Calculate the initial total price based on the items in the cart
    const calculateTotalPrice = () => {
        let initialTotalPrice = nonEmptyCartItems.reduce((total, productId) => {
            const product = PRODUCTS.find((p) => p.id === parseInt(productId));
            if (product) {
                return total + cartItems[productId] * product.price;
            }
            return total;
        }, 0);

        // Add the shipment cost if a shipment option is selected
        if (selectedShipment) {
            if (selectedShipment.value === 1) {
                initialTotalPrice += REGULAR_SHIPMENT_PRICE;
            } else if (selectedShipment.value === 2) {
                initialTotalPrice += FAST_SHIPMENT_PRICE;
            }
        }

        return initialTotalPrice;
    };

    const isCartEmpty = nonEmptyCartItems.length === 0;
    const totalPrice = calculateTotalPrice();

    return (
        <div className='cart'>
            <div className='cart-items'>
                <div className='shoping-cart'>
                    <h1 className='shooping-text'>SHOPPING CART</h1>
                    <h1 className='cart-line'></h1>
                    <div className='cart-item'>
                        {isCartEmpty ? (
                            <h2 className='cart-empty-text'>Your cart is empty</h2>
                        ) : (
                            nonEmptyCartItems.map((productId) => {
                                const product = PRODUCTS.find((p) => p.id === parseInt(productId));
                                return <CartItem data={product} key={product.id} />;
                            })
                        )}
                    </div>
                </div>

                <div className='receipt'>
                    <h1 className='order-text'>ORDER SUMMARY</h1>
                    <h1 className='cart-line'></h1>
                    <div className='payment-container'>
                        <div className='promo-container'>
                            <p>Promo Code:</p>
                            <input className='promo-input' type="text" placeholder='Promo Code' />
                        </div>
                        <div className='shipment-container'>
                            <p style={{ textAlign: 'center' }}>Select Shipment:</p>
                            <Select
                                className='select-container'
                                options={options}
                                onChange={(values) => setSelectedShipment(values[0])}
                                value={selectedShipment}
                            />
                        </div>
                        <h3>Total: {totalPrice.toFixed(2)}$</h3>
                        <button className='checkout-button'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
