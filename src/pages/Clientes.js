// src/pages/Clientes.js
import React, { useEffect, useState } from 'react';
import api from '../api';

const Clientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    api.get('/clientes')
      .then(response => {
        setClientes(response.data);
      })
      .catch(error => console.error('Error fetching clientes:', error));
  }, []);

  const deleteCliente = (id) => {
    api.delete(`/clientes/${id}`)
      .then(() => setClientes(clientes.filter(cliente => cliente.ID_cliente !== id)))
      .catch(error => console.error('Error deleting cliente:', error));
  };

  return (
    <main className="container mt-4">
      <h2>Clientes</h2>
      {clientes.length === 0 ? (
        <p>No hay clientes registrados.</p>
      ) : (
        <ul className="list-group">
          {clientes.map(cliente => (
            <li key={cliente.ID_cliente} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{cliente.Nombre}</strong> ({cliente.Email})
              </div>
              <button className="btn btn-danger" onClick={() => deleteCliente(cliente.ID_cliente)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Clientes;
