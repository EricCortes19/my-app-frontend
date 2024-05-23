// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import CreateProduct from './pages/CreateProduct';
import UpdateProduct from './pages/UpdateProduct';
import Clientes from './pages/Clientes';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './CartContext';
import './styles.css'; // Importar el archivo CSS general

const App = () => (
  <CartProvider>
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/crear-producto" element={<CreateProduct />} />
          <Route path="/actualizar-producto/:id" element={<UpdateProduct />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </CartProvider>
);

export default App;
