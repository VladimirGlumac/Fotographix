import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shopcart from './context/shopcart'; // Import the Shopcart component

import Home from './components/pages/Home';
import Shop from './components/pages/Shop/Shop';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contacts';
import Layout from './components/Layout';
import Cart from './components/pages/Cart';
import Cameras from './components/pages/Blog/Cameras';
import Photography from './components/pages/Blog/Photography';
import Editing from './components/pages/Blog/Editing';
import Gear from './components/pages/Blog/Gear';
import Portret from './components/pages/Blog/Portret';
import Wildlife from './components/pages/Blog/Wildlife';

function App() {
  return (
    <Shopcart>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="blog" element={<Blog />} />
            <Route path="/blog/cameras" element={<Cameras />} />
            <Route path="/blog/photography" element={<Photography />} />
            <Route path="/blog/editing" element={<Editing />} />
            <Route path="/blog/gear" element={<Gear />} />
            <Route path="/blog/portret" element={<Portret />} />
            <Route path="/blog/wildlife" element={<Wildlife />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </Shopcart>

  );
}

export default App;
