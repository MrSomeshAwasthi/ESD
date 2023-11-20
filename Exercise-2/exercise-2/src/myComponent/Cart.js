import React, { useState, useEffect } from 'react';
import cartData from './Cart.json';

const CartComponent = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartItems(cartData);
  }, []);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <style>
        {`
           .containers {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin-top: 50px;
            max-width: 800px; 
            margin-left: auto;
            margin-right: auto;
          }
          
          .cart-items {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          }
          
          .cart-item {
            display: flex;
            background-color: #f8f9fa;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          
          .cart-item-image {
            width: 30%;
            object-fit: cover;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
          }
          
          .cart-item-details {
            flex-grow: 1;
            padding: 20px;
          }
          
          .cart-item-name {
            font-size: 18px;
            font-weight: bold;
          }
          
          .cart-item-quantity {
            margin-top: 8px;
          }
          
          .cart-item-price {
            margin-top: 8px;
          }
          
          .btn-remove {
            margin-top: 12px;
            padding: 8px 16px;
            background-color: #dc3545;
            color: #ffffff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          
          .cart-summary {
            margin-top: 20px;
            text-align: center;
          }
          
          .btn-checkout {
            padding: 12px 24px;
            background-color: #28a745;
            color: #ffffff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          
        `}
      </style>
      <main>
        <div className="containers mt-4">
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
      </main>
    </>
  );
};

export default CartComponent;