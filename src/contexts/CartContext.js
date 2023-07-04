import React, { createContext, useState, useEffect, useContext } from "react";

// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);

  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      // if cart item is already in the cart
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        }
      });
    } else {
      setCart((cart) => [...cart, newItem])
    }
  };

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id) => {
    console.log('amount increased');
  };

  return (
    <CartContext.Provider
     value={{ cart, addToCart, removeFromCart, clearCart,
    increaseAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
export default CartProvider;
