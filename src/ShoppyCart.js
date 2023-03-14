import React from 'react';
import './style.css';
import { useState } from 'react';

const initialCart = [
  { id: '1', nombre: 'Galletas', descripcion: 'Galletas po' },
  { id: '2', nombre: 'Galletas', descripcion: 'Galletas po' },
];

const ShoppyCart = () => {
  const [cart, setCart] = useState(initialCart);

  return <div></div>;
};

export default ShoppyCart;
