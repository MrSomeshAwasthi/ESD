import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Fetch cart details from Cart.json
    fetch('./Cart.json')
      .then(response => response.json())
      .then(data => setCartItems(data))
      .catch(error => console.error('Error fetching cart data:', error));
  }, []);

  useEffect(() => {
    // Calculate total price whenever cart items change
    const newTotalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const handleQuantityChange = (itemId, newQuantity) => {
    // Update quantity for the specified item
    const updatedCartItems = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = (itemId) => {
    // Remove the specified item from the cart
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Your Cart</h1>

      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-quantity">
                Quantity:
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                />
              </p>
              <p className="cart-item-price">Total Price: Rs.{item.quantity * item.price}</p>
              <button className="btn btn-remove" onClick={() => handleRemoveItem(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2 className="text-center mb-4">Order Summary</h2>
        <p>Total Items: {cartItems.length}</p>
        <p>Total Price: Rs.{totalPrice.toFixed(2)}</p>
        <button className="btn btn-checkout">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
