import React from 'react';
import './style.css';
import { useState } from 'react';

const initialCart = [
  { id: 1, nombre: 'Galletas', descripcion: 'Galletas po' },
  { id: 2, nombre: 'Pasteles', descripcion: 'Pasteles Crema' },
  { id: 3, nombre: 'Jugos', descripcion: 'Jugos naturales' },
];

const ShoppyCart = () => {
  const [cart, setCart] = useState(initialCart);

  const deleteProduct = (productId) => {
    const deleteP = cart.filter((producto) => producto.id !== productId);
    setCart(deleteP);
  };

  const addProduct = (newProduct) => {
    newProduct.id = Date.now();
    const addP = [...cart, newProduct];
    setCart(addP);
  };

  return (
    <div>
      <div class="btns">
        <button
          class="button2"
          onClick={() => addProduct({ nombre: 'Hola', descripcion: 'Hola' })}
        >
          Agregar
        </button>
        <div style={{ display: 'grid' }}>
          <input
            type="text"
            id="name"
            name="descripcion_name"
            placeHolder="Nuevo producto"
          />
          <input
            type="text"
            id="descripcion"
            name="descripcion_name"
            placeHolder="Descripcion"
          />
        </div>
      </div>
      {cart.map((producto) => (
        <div key={producto.id}>
          <h1>{producto.nombre}</h1>
          <p>{producto.descripcion}</p>
          <div class="btns">
            <button class="button" onClick={() => deleteProduct(producto.id)}>
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppyCart;
