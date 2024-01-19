import React from 'react';

const Product = ({ product, addToCart, removeFromCart, isInCart }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      {isInCart ? (
        <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default Product;