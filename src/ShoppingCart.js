import React from 'react';

const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;