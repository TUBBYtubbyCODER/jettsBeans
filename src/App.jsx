import React, { useState } from 'react';

// Bean data
const beansData = [
  {
    id: 1,
    name: 'Black Beans',
    description: 'Rich, hearty black beans perfect for any meal. Great for tacos, soups, and more!',
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400&h=300&fit=crop',
    price: 3.99
  },
  {
    id: 2,
    name: 'Pinto Beans',
    description: 'Classic pinto beans with a creamy texture. A staple for traditional dishes.',
    image: 'https://images.unsplash.com/photo-1612459387180-b9e98bfbd06b?w=400&h=300&fit=crop',
    price: 3.49
  },
  {
    id: 3,
    name: 'Navy Beans',
    description: 'Small, mild-flavored beans ideal for baked beans and casseroles.',
    image: 'https://images.unsplash.com/photo-1556910110-2f5d6e3d8201?w=400&h=300&fit=crop',
    price: 3.79
  },
  {
    id: 4,
    name: 'Roo Beans',
    description: 'Exotic and flavorful! Our signature Australian-inspired beans with a unique taste.',
    image: 'https://images.unsplash.com/photo-1583999913260-c58c80e55f16?w=400&h=300&fit=crop',
    price: 4.99
  },
  {
    id: 5,
    name: "JETT'S SPECIAL COMBO",
    description: 'The ultimate bean experience! A carefully curated mix of our finest beans.',
    image: 'https://images.unsplash.com/photo-1595855759920-86582396756a?w=400&h=300&fit=crop',
    price: 6.99
  }
];

// Header Component
const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="bg-amber-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <button 
            onClick={() => setCurrentPage('home')} 
            className="text-3xl font-bold hover:text-amber-200 transition"
          >
            Jett's Beans
          </button>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <button 
                  onClick={() => setCurrentPage('home')}
                  className={`px-4 py-2 rounded transition ${
                    currentPage === 'home' 
                      ? 'bg-amber-600 font-semibold' 
                      : 'hover:bg-amber-700'
                  }`}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('about')}
                  className={`px-4 py-2 rounded transition ${
                    currentPage === 'about' 
                      ? 'bg-amber-600 font-semibold' 
                      : 'hover:bg-amber-700'
                  }`}
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('order')}
                  className={`px-4 py-2 rounded transition ${
                    currentPage === 'order' 
                      ? 'bg-amber-600 font-semibold' 
                      : 'hover:bg-amber-700'
                  }`}
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
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <p className="mb-2">© 2025 Jett's Beans. All rights reserved.</p>
          <p className="text-gray-400">
            Contact us: <a href="mailto:jettsbeans@example.com" className="text-amber-400 hover:text-amber-300">jettsbeans@example.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

// Home Page Component
const HomePage = ({ setCurrentPage }) => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/jettChef.jpeg')" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">Welcome to Jett's Beans!</h1>
          <p className="text-3xl text-white mb-8 drop-shadow-lg">Order your favorite beans from Jett's Beans!</p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12">
          <img 
            src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=1200&h=600&fit=crop" 
            alt="Assorted Beans" 
            className="w-full rounded-lg shadow-2xl"
          />
        </div>

        <div className="text-center">
          <button 
            onClick={() => setCurrentPage('order')}
            className="inline-block bg-amber-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-amber-700 transition shadow-lg"
          >
            Start Your Order
          </button>
        </div>
      </div>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-amber-800 mb-6">About Jett's Beans</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-700 mb-4">
            Founded in 2020, Jett's Beans started as a dream to bring the finest quality beans 
            to homes across the country. Our founder, Jett Rodriguez, grew up helping his grandmother 
            prepare traditional bean dishes, sparking a lifelong passion for these nutritious legumes.
          </p>
          
          <p className="text-gray-700 mb-4">
            What sets Jett's Beans apart is our commitment to quality and sustainability. We source 
            our beans from small family farms that practice ethical and environmentally-friendly 
            farming methods. Each can is carefully inspected and packed to ensure you receive 
            only the best.
          </p>
          
          <p className="text-gray-700 mb-4">
            From classic Black and Pinto beans to our exotic Roo Beans and the crowd-favorite 
            JETT'S SPECIAL COMBO, we offer something for every palate. Whether you're making 
            a traditional family recipe or experimenting with new flavors, Jett's Beans has you covered.
          </p>
          
          <p className="text-gray-700 font-semibold">
            Thank you for choosing Jett's Beans. We're honored to be part of your kitchen!
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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
      <img 
        src={bean.image} 
        alt={bean.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-amber-800 mb-2">{bean.name}</h3>
        <p className="text-gray-600 mb-4">{bean.description}</p>
        <p className="text-xl font-semibold text-gray-800 mb-4">${bean.price.toFixed(2)}</p>
        
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
            <input 
              type="number" 
              min="0" 
              value={quantity}
              onChange={handleQuantityChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <button 
            onClick={handleAddToCart}
            className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition font-semibold mt-6"
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
      <div className="bg-gray-100 rounded-lg p-6 text-center">
        <p className="text-gray-600 text-lg">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-3xl font-bold text-amber-800 mb-6">Your Cart</h2>
      
      <div className="space-y-4 mb-6">
        {cart.map((item) => (
          <div key={item.bean.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{item.bean.name}</h3>
              <p className="text-gray-600">${item.bean.price.toFixed(2)} each</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <input 
                type="number" 
                min="0" 
                value={item.quantity}
                onChange={(e) => onUpdateQuantity(item.bean.id, Math.max(0, parseInt(e.target.value) || 0))}
                className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <span className="font-semibold w-20 text-right">
                ${(item.bean.price * item.quantity).toFixed(2)}
              </span>
              <button 
                onClick={() => onRemove(item.bean.id)}
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t pt-4 mb-6">
        <div className="flex justify-between items-center text-xl font-bold">
          <span>Total:</span>
          <span className="text-amber-800">${total.toFixed(2)}</span>
        </div>
      </div>
      
      <button 
        onClick={onSubmitOrder}
        className="w-full bg-green-600 text-white py-3 rounded-lg text-xl font-semibold hover:bg-green-700 transition shadow-lg"
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
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-green-100 border-2 border-green-500 rounded-lg p-12 text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Thank You!</h1>
          <p className="text-xl text-gray-700 mb-4">Your order has been successfully submitted.</p>
          <p className="text-gray-600">We'll start preparing your delicious beans right away!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-amber-800 mb-8 text-center">Order Your Beans</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {beansData.map(bean => (
          <BeanCard 
            key={bean.id} 
            bean={bean} 
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      
      <div className="max-w-3xl mx-auto">
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
    <div className="min-h-screen flex flex-col bg-amber-50">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;