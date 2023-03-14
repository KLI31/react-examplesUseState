import React from 'react';
import './style.css';
import { useState } from 'react';

const initialValues = {
  id: '3',
  nombre: 'Platano',
  precio: '3200$',
};

const ProductApp = () => {
  const [product, setProduct] = useState(initialValues);

  const updateProducts = (property, value) => {
    setProduct({
      ...product,
      [property]: value,
    });
  };

  return (
    <div>
      <h1>{product.id}</h1>
      <h1>{product.nombre}</h1>
      <h1>{product.precio}</h1>
      <button onClick={() => updateProducts('nombre', 'Papaya')}>
        Cambiar producto
      </button>
      <div>{JSON.stringify(product)}</div>
    </div>
  );
};

export default ProductApp;
