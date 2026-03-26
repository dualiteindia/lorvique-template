import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage';
import WorldOfLorvique from './pages/WorldOfLorvique';
import ArticlePage from './pages/ArticlePage';
import ScrollToTop from './components/ScrollToTop';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';
import { CartProvider } from './context/CartContext';

const ScrollToTopWrapper = () => {
  return <ScrollToTop />;
};

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTopWrapper />
        <CartDrawer />
        <Toast />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/world-of-lorvique" element={<WorldOfLorvique />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
