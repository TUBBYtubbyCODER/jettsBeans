import React, { useState } from 'react';

// Bean data
const beansData = [
  {
    id: 1,
    name: 'Black Beans',
    description: 'Rich, hearty black beans perfect for any meal. Great for tacos, soups, and more!',
    image: '/images/black-beans.jpg',
    price: 3.99
  },
  {
    id: 2,
    name: 'Pinto Beans',
    description: 'Classic pinto beans with a creamy texture. A staple for traditional dishes.',
    image: '/images/pinto-beans.jpg',
    price: 3.49
  },
  {
    id: 3,
    name: 'Navy Beans',
    description: 'Small, mild-flavored beans ideal for baked beans and casseroles.',
    image: '/images/navy-beans.jpg',
    price: 3.79
  },
  {
    id: 4,
    name: 'Roo Beans',
    description: 'Exotic and flavorful! Our signature Australian-inspired beans with a unique taste.',
    image: '/images/roo-beans.jpg',
    price: 4.99
  },
  {
    id: 5,
    name: "JETT'S SPECIAL COMBO",
    description: 'The ultimate bean experience! A carefully curated mix of our finest beans.',
    image: '/images/special-combo.jpg',
    price: 6.99
  }
];

// Styles
const styles = {
  header: {
    backgroundColor: '#92400e',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  headerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  headerFlex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 0',
  },
  logo: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
    listStyle: 'none',
  },
  navButton: {
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.2s',
    color: 'white',
  },
  navButtonActive: {
    backgroundColor: '#d97706',
    fontWeight: '600',
  },
  navButtonInactive: {
    backgroundColor: 'transparent',
  },
  footer: {
    backgroundColor: '#1f2937',
    color: 'white',
    marginTop: 'auto',
  },
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1.5rem 1rem',
    textAlign: 'center',
  },
  footerLink: {
    color: '#fbbf24',
    textDecoration: 'none',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '3rem 1rem',
  },
  homeHero: {
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  heroContent: {
    position: 'relative',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '3rem 1rem',
  },
  heroTitle: {
    fontSize: '3.75rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1rem',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  },
  heroSubtitle: {
    fontSize: '1.875rem',
    color: 'white',
    marginBottom: '2rem',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  },
  heroImage: {
    width: '100%',
    maxWidth: '64rem',
    margin: '0 auto 3rem',
    borderRadius: '0.5rem',
    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3)',
  },
  ctaButton: {
    display: 'inline-block',
    backgroundColor: '#d97706',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '0.5rem',
    fontSize: '1.25rem',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'background-color 0.2s',
  },

  // ABOUT PAGE BACKGROUND (uses image from public/images)
  aboutBackground: {
    minHeight: '100vh',
    backgroundImage: "url('/images/jettCookingBeans.jpeg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem 1rem',
  },
  aboutOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.)',
  },
  aboutContainer: {
    position: 'relative',
    maxWidth: '48rem',
    margin: '0 auto',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 1)',
    padding: '2rem',
    zIndex: 1,
  },

  aboutTitle: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: '#92400e',
    marginBottom: '1.5rem',
  },
  aboutText: {
    color: '#374151',
    marginBottom: '1rem',
    lineHeight: '1.75',
  },
  beanGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    marginBottom: '3rem',
  },
  beanCard: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.2s',
  },
  beanImage: {
    width: '100%',
    height: '12rem',
    objectFit: 'cover',
  },
  beanCardContent: {
    padding: '1.5rem',
  },
  beanName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#92400e',
    marginBottom: '0.5rem',
  },
  beanDescription: {
    color: '#6b7280',
    marginBottom: '1rem',
  },
  beanPrice: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem',
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  input: {
    flex: 1,
    padding: '0.5rem 0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    fontSize: '1rem',
  },
  addButton: {
    backgroundColor: '#d97706',
    color: 'white',
    padding: '0.5rem 1.5rem',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background-color 0.2s',
  },
  cartContainer: {
    maxWidth: '48rem',
    margin: '0 auto',
  },
  cartBox: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    padding: '1.5rem',
  },
  cartEmpty: {
    backgroundColor: '#f3f4f6',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    textAlign: 'center',
    color: '#6b7280',
    fontSize: '1.125rem',
  },
  cartTitle: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#92400e',
    marginBottom: '1.5rem',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #e5e7eb',
    paddingBottom: '1rem',
    marginBottom: '1rem',
  },
  cartItemDetails: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  removeButton: {
    color: '#dc2626',
    fontWeight: '600',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  cartTotal: {
    borderTop: '1px solid #e5e7eb',
    paddingTop: '1rem',
    marginBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  submitButton: {
    width: '100%',
    backgroundColor: '#16a34a',
    color: 'white',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    fontSize: '1.25rem',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'background-color 0.2s',
  },
  thankYouBox: {
    maxWidth: '32rem',
    margin: '0 auto',
    backgroundColor: '#dcfce7',
    border: '2px solid #16a34a',
    borderRadius: '0.5rem',
    padding: '3rem',
    textAlign: 'center',
  },
  thankYouTitle: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: '#166534',
    marginBottom: '1rem',
  },
};

// Header Component
const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header style={styles.header}>
      <div style={styles.headerContainer}>
        <div style={styles.headerFlex}>
          <button 
            onClick={() => setCurrentPage('home')} 
            style={styles.logo}
            onMouseOver={(e) => e.target.style.color = '#fbbf24'}
            onMouseOut={(e) => e.target.style.color = 'white'}
          >
            Jett's Beans
          </button>
          <nav>
            <ul style={styles.nav}>
              <li>
                <button 
                  onClick={() => setCurrentPage('home')}
                  style={{
                    ...styles.navButton,
                    ...(currentPage === 'home' ? styles.navButtonActive : styles.navButtonInactive)
                  }}
                  onMouseOver={(e) => {
                    if (currentPage !== 'home') e.target.style.backgroundColor = '#78350f';
                  }}
                  onMouseOut={(e) => {
                    if (currentPage !== 'home') e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('about')}
                  style={{
                    ...styles.navButton,
                    ...(currentPage === 'about' ? styles.navButtonActive : styles.navButtonInactive)
                  }}
                  onMouseOver={(e) => {
                    if (currentPage !== 'about') e.target.style.backgroundColor = '#78350f';
                  }}
                  onMouseOut={(e) => {
                    if (currentPage !== 'about') e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('order')}
                  style={{
                    ...styles.navButton,
                    ...(currentPage === 'order' ? styles.navButtonActive : styles.navButtonInactive)
                  }}
                  onMouseOver={(e) => {
                    if (currentPage !== 'order') e.target.style.backgroundColor = '#78350f';
                  }}
                  onMouseOut={(e) => {
                    if (currentPage !== 'order') e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  Order
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <p style={{ marginBottom: '0.5rem' }}>© 2025 Jett's Beans. All rights reserved.</p>
        <p style={{ color: '#9ca3af' }}>
          Contact us: <a href="mailto:jettsbeans@rooroorooyourboat.com" style={styles.footerLink}>jettsbeans@rooroorooyourboat.com</a>
        </p>
      </div>
    </footer>
  );
};

// Home Page Component
const HomePage = ({ setCurrentPage }) => {
  return (
    <div 
      style={{
        ...styles.homeHero,
        backgroundImage: "url('/images/jettChef.jpeg')"
      }}
    >
      <div style={styles.overlay}></div>
      
      <div style={styles.heroContent}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={styles.heroTitle}>Welcome to Jett's Beans!</h1>
          <p style={styles.heroSubtitle}>Order your favorite beans from Jett's Beans!</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button 
            onClick={() => setCurrentPage('order')}
            style={styles.ctaButton}
            onMouseOver={(e) => e.target.style.backgroundColor = '#b45309'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#d97706'}
          >
            Start Your Order
          </button>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div style={styles.aboutBackground}>
      <div style={styles.aboutOverlay}></div>
      <div style={styles.aboutContainer}>
        <h1 style={styles.aboutTitle}>About Jett's Beans</h1>
        
        <div>
          
          <p style={styles.aboutText}>
            Founded in 2025, Jett's Beans started as a dream to bring the finest quality beans 
            to homes across the country. Our founder, Jettudiah, grew up eating many kinds of beans, 
            sparking a lifelong passion for these nutritious legumes.
          </p>
          
          <p style={styles.aboutText}>
            What sets Jett's Beans apart is our commitment to quality and sustainability. We source 
            our beans from small family farms that practice ethical and environmentally-friendly 
            farming methods. Each can is carefully inspected and packed to ensure you receive 
            only the best from JETTUDIAH!
          </p>
          
          <p style={styles.aboutText}>
            From classic Black and Pinto beans to our exotic ROOO Beans, and the crowd-favorite 
            JETT'S SPECIAL COMBO, we offer something for every palate. Whether you're making 
            a traditional family recipe or experimenting with new flavors, Jett's Beans has you covered.
          </p>
          
          <p style={styles.aboutText}>
            RIce & Legumes are the most commonly consumed food in the world. 
            Do you know how many BEANS are eaten every day???
          </p>

          <p style={{ ...styles.aboutText, fontWeight: '600' }}>
            Thank ROOOO for choosing Jett's Beans. We're honored to be part of your kitchen!
          </p>
        </div>
      </div>
    </div>
  );
};

// Bean Card Component
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
    <div 
      style={styles.beanCard}
      onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <img 
        src={bean.image} 
        alt={bean.name} 
        style={styles.beanImage}
      />
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

// Cart Summary Component
const CartSummary = ({ cart, onUpdateQuantity, onRemove, onSubmitOrder }) => {
  const total = cart.reduce((sum, item) => sum + (item.bean.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div style={styles.cartEmpty}>
        <p>Your cart is empty</p>
      </div>
    );
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

// Order Page Component
const OrderPage = () => {
  const [cart, setCart] = useState([]);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleAddToCart = (bean, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.bean.id === bean.id);
      
      if (existingItem) {
        return prevCart.map(item => 
          item.bean.id === bean.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { bean, quantity }];
      }
    });
  };

  const handleUpdateQuantity = (beanId, newQuantity) => {
    if (newQuantity === 0) {
      handleRemove(beanId);
    } else {
      setCart(prevCart => 
        prevCart.map(item => 
          item.bean.id === beanId 
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  const handleRemove = (beanId) => {
    setCart(prevCart => prevCart.filter(item => item.bean.id !== beanId));
  };

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
          <p style={{ fontSize: '1.25rem', color: '#374151', marginBottom: '1rem' }}>
            Your order has been successfully submitted.
          </p>
          <p style={{ color: '#6b7280' }}>
            We'll start preparing your delicious beans right away!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={{ ...styles.cartTitle, textAlign: 'center', marginBottom: '2rem' }}>
        Order Your Beans
      </h1>
      
      <div style={styles.beanGrid}>
        {beansData.map(bean => (
          <BeanCard 
            key={bean.id} 
            bean={bean} 
            onAddToCart={handleAddToCart}
          />
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

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'order':
        return <OrderPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fef3c7' }}>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
