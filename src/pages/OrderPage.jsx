// --- src/pages/OrderPage.jsx ---
import React, { useState } from 'react';
import styles from '../styles/styles';
import beansData from '../data/beans';

const BeanCard = ({ bean, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (e) => {
    const value = Math.max(0, parseInt(e.target.value) || 0);
    setQuantity(value);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      onAddToCart(bean, quantity);
      setQuantity(0);
    }
  };

  return (
    <div style={styles.beanCard} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      <img src={bean.image} alt={bean.name} style={styles.beanImage} />
      <div style={styles.beanCardContent}>
        <h3 style={styles.beanName}>{bean.name}</h3>
        <p style={styles.beanDescription}>{bean.description}</p>
        <p style={styles.beanPrice}>${bean.price.toFixed(2)}</p>
        <div style={styles.inputGroup}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>
              Quantity
            </label>
            <input
              type="number"
              min="0"
              value={quantity}
              onChange={handleQuantityChange}
              style={styles.input}
            />
          </div>
          <button
            onClick={handleAddToCart}
            style={{ ...styles.addButton, marginTop: '1.5rem' }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#b45309'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#d97706'}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const CartSummary = ({ cart, onUpdateQuantity, onRemove, onSubmitOrder }) => {
  const total = cart.reduce((sum, item) => sum + (item.bean.price * item.quantity), 0);

  if (cart.length === 0) {
    return <div style={styles.cartEmpty}><p>Your cart is empty</p></div>;
  }

  return (
    <div style={styles.cartBox}>
      <h2 style={styles.cartTitle}>Your Cart</h2>
      <div style={{ marginBottom: '1.5rem' }}>
        {cart.map((item) => (
          <div key={item.bean.id} style={styles.cartItem}>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontWeight: '600', fontSize: '1.125rem' }}>{item.bean.name}</h3>
              <p style={{ color: '#6b7280' }}>${item.bean.price.toFixed(2)} each</p>
            </div>
            <div style={styles.cartItemDetails}>
              <input
                type="number"
                min="0"
                value={item.quantity}
                onChange={(e) => onUpdateQuantity(item.bean.id, Math.max(0, parseInt(e.target.value) || 0))}
                style={{ ...styles.input, width: '80px' }}
              />
              <span style={{ fontWeight: '600', width: '80px', textAlign: 'right' }}>
                ${(item.bean.price * item.quantity).toFixed(2)}
              </span>
              <button
                onClick={() => onRemove(item.bean.id)}
                style={styles.removeButton}
                onMouseOver={(e) => e.target.style.color = '#b91c1c'}
                onMouseOut={(e) => e.target.style.color = '#dc2626'}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={styles.cartTotal}>
        <span>Total:</span>
        <span style={{ color: '#92400e' }}>${total.toFixed(2)}</span>
      </div>
      <button
        onClick={onSubmitOrder}
        style={styles.submitButton}
        onMouseOver={(e) => e.target.style.backgroundColor = '#15803d'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#16a34a'}
      >
        Submit Order
      </button>
    </div>
  );
};

const OrderPage = () => {
  const [cart, setCart] = useState([]);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleAddToCart = (bean, quantity) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.bean.id === bean.id);
      return existing
        ? prev.map((item) => item.bean.id === bean.id ? { ...item, quantity: item.quantity + quantity } : item)
        : [...prev, { bean, quantity }];
    });
  };

  const handleUpdateQuantity = (id, qty) => {
    qty === 0 ? handleRemove(id) : setCart((prev) => prev.map((i) => i.bean.id === id ? { ...i, quantity: qty } : i));
  };

  const handleRemove = (id) => setCart((prev) => prev.filter((i) => i.bean.id !== id));

  const handleSubmitOrder = () => {
    setOrderSubmitted(true);
    setCart([]);
    setTimeout(() => setOrderSubmitted(false), 5000);
  };

  if (orderSubmitted) {
    return (
      <div style={styles.container}>
        <div style={styles.thankYouBox}>
          <h1 style={styles.thankYouTitle}>Thank You!</h1>
          <p style={{ fontSize: '1.25rem', color: '#374151', marginBottom: '1rem' }}>Your order has been successfully submitted.</p>
          <p style={{ color: '#6b7280' }}>We'll start preparing your delicious beans right away!</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={{ ...styles.cartTitle, textAlign: 'center', marginBottom: '2rem' }}>Order Your Beans</h1>
      <div style={styles.beanGrid}>
        {beansData.map((bean) => (
          <BeanCard key={bean.id} bean={bean} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <div style={styles.cartContainer}>
        <CartSummary
          cart={cart}
          onUpdateQuantity={handleUpdateQuantity}
          onRemove={handleRemove}
          onSubmitOrder={handleSubmitOrder}
        />
      </div>
    </div>
  );
};

export default OrderPage;