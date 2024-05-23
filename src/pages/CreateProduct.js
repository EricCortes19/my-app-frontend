// src/pages/CreateProduct.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CreateProduct = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      Nombre_producto: nombre,
      Descripción: descripcion,
      Precio: parseFloat(precio),
      Stock: parseInt(stock, 10)
    };
    api.post('/productos', newProduct)
      .then(() => navigate('/productos'))
      .catch(error => console.error('Error creating product:', error));
  };

  return (
    <div>
      <Header />
      <main>
        <h2>Crear Producto</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div>
            <label>Descripción:</label>
            <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          </div>
          <div>
            <label>Precio:</label>
            <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />
          </div>
          <div>
            <label>Stock:</label>
            <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
          </div>
          <button type="submit">Crear</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default CreateProduct;
