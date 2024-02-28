import React, { useState } from 'react';

const Product = ({ product, addToCart }) => {
  const { id, name, price } = product;

  return (
    <div className="product">
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  );
};

const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}{' '}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    // Add more products as needed
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd) {
      setCart([...cart, productToAdd]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  }

}

export default ShoppingCart
