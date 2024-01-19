import React, { useState } from 'react';
import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  return (
    <div>
      <h1>Shopping App</h1>
      <div>
        {/* List of Products */}
        <Product
          product={{ id: 1, name: 'Product 1', description: 'Description 1' }}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          isInCart={cart.some((item) => item.id === 1)}
        />
        <Product
          product={{ id: 2, name: 'Product 2', description: 'Description 2' }}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          isInCart={cart.some((item) => item.id === 2)}
        />
        {/* Add more products as needed */}

        {/* Shopping Cart */}
        <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default App;
