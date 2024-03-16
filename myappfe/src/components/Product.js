// Product.js
import React from 'react';

function Product({ name, price, addToCart }) {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => addToCart({ name, price })}>Add to Cart</button>
    </div>
  );
}

export default Product;
