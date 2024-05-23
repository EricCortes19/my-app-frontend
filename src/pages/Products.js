// src/pages/Products.js
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import { CartContext } from '../CartContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    api.get('/productos')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <main className="container mt-4">
      <h2>Productos</h2>
      <ul className="list-group">
        {products.map(product => (
          <li key={product.ID_producto} className="list-group-item d-flex justify-content-between align-items-center">
            {product.Nombre_producto} - ${product.Precio}
            <div>
              <button className="btn btn-success mr-2" onClick={() => addToCart(product)}>Agregar al Carrito</button>
              <Link className="btn btn-primary" to={`/actualizar-producto/${product.ID_producto}`}>Editar</Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Products;
