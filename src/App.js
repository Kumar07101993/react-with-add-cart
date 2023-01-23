import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function Product({ value }) {
  const [addedToCart, setAddedToCart] = useState(false);
  const [rating, setRating] = useState(value);

  function handleAddToCart() {
    setAddedToCart(true);
  }

  function handleRemoveFromCart() {
    setAddedToCart(false);
  }

  return (
    <div>
      <p>Rating: {rating}</p>
      {addedToCart ? (
        <button onClick={handleRemoveFromCart}>Remove from Cart</button>
      ) : (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
    </div>
  );
}


export default App;

