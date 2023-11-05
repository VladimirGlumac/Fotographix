import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiFillCamera, AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IoIosSearch } from 'react-icons/io';
import { ShopContext } from '../context/shopcart';
import { color } from 'framer-motion';

export default function Header() {
    const [navbar, setNavBar] = useState(false);
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    const { cartItems } = useContext(ShopContext);
    const totalCount = Object.values(cartItems).reduce((acc, count) => acc + count, 0);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    const toggleMobileMenu = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    };

    return (
        <header className={navbar ? 'header active' : 'header'}>
            <div className="logo">
                <a href="/">
                    <h2 className={navbar ? 'website-name active' : 'website-name'}>
                        <AiFillCamera className='logo-image' />
                        FOTOGRAPHIX
                    </h2>
                </a>
            </div>
            <div className="input-container">
                <input className={navbar ? 'input active' : 'input'} type="text" placeholder="Search..." />
                <button className={navbar ? 'input-button active' : 'input-button'}>
                    <IoIosSearch />
                </button>
            </div>

            <nav className="navigation">
                <div className={`menu-links ${mobileMenuVisible ? 'show' : ''}`}>
                    <Link className={navbar ? 'header-link active' : 'header-link'} to="/">
                        Home
                    </Link>
                    <Link className={navbar ? 'header-link active' : 'header-link'} to="/shop">
                        Shop
                    </Link>
                    <Link className={navbar ? 'header-link active' : 'header-link'} to="/blog">
                        Blog
                    </Link>
                    <Link className={navbar ? 'header-link active' : 'header-link'} to="/contact">
                        Contact
                    </Link>
                </div>
                <div className="navigation-container-two">
                    <Link className={navbar ? 'cart-link active' : 'cart-link'} to="/cart">
                        <AiOutlineShoppingCart /> <span className="cart-count">{totalCount}</span>
                    </Link>
                    {!mobileMenuVisible ? (
                        <AiOutlineMenu
                            className={navbar ? 'menu active' : 'menu'}
                            size={30}
                            style={navbar ? { color: '#1c1c1c' } : null}
                            onClick={toggleMobileMenu}
                        />
                    ) : (
                        <AiOutlineClose
                            className={navbar ? 'menu active' : 'menu'}
                            size={30}
                            style={navbar ? { color: '#1c1c1c' } : null}
                            onClick={toggleMobileMenu}
                        />
                    )}
                </div>
            </nav>
        </header>
    );
}

