// src/pages/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const handleQuantityChange = (productId, quantity) => {
    updateQuantity(productId, parseInt(quantity, 10));
  };

  const handleCheckout = () => {
    // Aquí puedes agregar la lógica para confirmar la compra
    alert('Compra confirmada!');
    clearCart();
  };

  return (
    <main className="container mt-4">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul className="list-group">
          {cart.map(item => (
            <li key={item.ID_producto} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{item.Nombre_producto}</strong> - ${item.Precio}
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.ID_producto, e.target.value)}
                  className="ml-3"
                  style={{ width: '60px' }}
                />
              </div>
              <button className="btn btn-danger" onClick={() => removeFromCart(item.ID_producto)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div className="mt-4">
          <button className="btn btn-primary" onClick={handleCheckout}>Confirmar Compra</button>
        </div>
      )}
    </main>
  );
};

export default Cart;
