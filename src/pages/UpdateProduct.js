// src/pages/UpdateProduct.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';
import Header from '../components/Header';
import Footer from '../components/Footer';

const UpdateProduct = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/productos/${id}`)
      .then(response => {
        const product = response.data;
        setNombre(product.Nombre_producto);
        setDescripcion(product.Descripción);
        setPrecio(product.Precio);
        setStock(product.Stock);
      })
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      Nombre_producto: nombre,
      Descripción: descripcion,
      Precio: parseFloat(precio),
      Stock: parseInt(stock, 10)
    };
    api.put(`/productos/${id}`, updatedProduct)
      .then(() => navigate('/productos'))
      .catch(error => console.error('Error updating product:', error));
  };

  return (
    <div>
      <Header />
      <main>
        <h2>Actualizar Producto</h2>
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
          <button type="submit">Actualizar</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default UpdateProduct;
