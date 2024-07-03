import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cart from '../components/Cart';
import { getCartItems, storeCartItems } from '../utils/storage';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCartItems = async () => {
      const items = await getCartItems();
      if (items) {
        setCartItems(items);
      }
    };
    loadCartItems();
  }, []);

  const removeFromCart = async (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
    await storeCartItems(updatedCart);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Text style={styles.total}>Est. Total: ${cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  total: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
  },
});

export default CartScreen;