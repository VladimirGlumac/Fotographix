import React, { useState, useEffect } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { PRODUCTS } from '../../Data/Products';
import Products from './Products';

export default function Shop() {
    const [selectedBrand, setSelectedBrand] = useState('Show All'); // Initially set to 'Show All'

    const handleBrandButtonClick = (brand) => {
        setSelectedBrand(brand);
    };

    const handleShowAllButtonClick = () => {
        setSelectedBrand('Show All');
    };

    useEffect(() => {
        // You can add additional logic here if needed when the selectedBrand changes.
        // For example, if you want to fetch new data based on the selected brand.
    }, [selectedBrand]);

    return (
        <div>
            <section className='shop-page-one'>
                <div className='discount-container'>
                    <h1 className='nicon-discount'>LIMITED TIME OFFER:</h1>
                    <h1 className='nicon-discount'>
                        UP TO 50% OFF ON ALL NIKON CAMERAS
                    </h1>
                    <a href='#shop-page-two' className='shop-button'>
                        Shop Now <FiShoppingCart />
                    </a>
                </div>
            </section>
            <section id='shop-page-two' className='shop-page-two'>
                <div className='products'>
                    <div className='sale-container'>
                        <div className='sale'>
                            <h2 className='sale-text'>ON SALE</h2>
                        </div>
                        <div className='off-price'>
                            {PRODUCTS.filter((product) => product.sale === true).map((product) => (
                                <Products key={product.id} data={product} />
                            ))}
                        </div>
                    </div>
                    <div className='brands-and-products'>
                        <div className='brands'>
                            <h2 className='brands-text'>BRANDS</h2>
                            <div className='categories'>

                                <button
                                    className={`brands-button ${selectedBrand === 'Show All' ? 'clicked' : ''}`}
                                    onClick={handleShowAllButtonClick}
                                >
                                    Show All
                                </button>
                                <button
                                    className={`brands-button ${selectedBrand === 'Sony' ? 'clicked' : ''}`}
                                    onClick={() => handleBrandButtonClick('Sony')}
                                >
                                    Sony
                                </button>
                                <button
                                    className={`brands-button ${selectedBrand === 'Canon' ? 'clicked' : ''}`}
                                    onClick={() => handleBrandButtonClick('Canon')}
                                >
                                    Canon
                                </button>
                                <button
                                    className={`brands-button ${selectedBrand === 'Nikon' ? 'clicked' : ''}`}
                                    onClick={() => handleBrandButtonClick('Nikon')}
                                >
                                    Nikon
                                </button>
                                <button
                                    className={`brands-button ${selectedBrand === 'Fujifilm' ? 'clicked' : ''}`}
                                    onClick={() => handleBrandButtonClick('Fujifilm')}
                                >
                                    Fujifilm
                                </button>
                                <button
                                    className={`brands-button ${selectedBrand === 'Panasonic' ? 'clicked' : ''}`}
                                    onClick={() => handleBrandButtonClick('Panasonic')}
                                >
                                    Panasonic
                                </button>
                                <button
                                    className={`brands-button ${selectedBrand === 'Pentax' ? 'clicked' : ''}`}
                                    onClick={() => handleBrandButtonClick('Pentax')}
                                >
                                    Pentax
                                </button>
                            </div>
                        </div>
                        <div className='other-products'>
                            {PRODUCTS
                                .filter((product) => selectedBrand === 'Show All' || product.brand === selectedBrand)
                                .map((product) => (
                                    <Products key={product.id} data={product} />
                                ))}
                        </div>
                    </div>
                </div>
                <h1 class Name='shop-line'></h1>
            </section>
        </div>
    );
}
