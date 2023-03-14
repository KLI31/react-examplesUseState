import React from 'react';
import './style.css';
import CounterApp from './CounterApp';
import ConditionalApp from './ConditionalApp';
import ErrorApp from './ErrorApp';
import ProductApp from './ProductApp';
import ShoppyCart from "./ShoppyCart"
export default function App() {
  return (
    <div>
      <h1>--------- useState ---------</h1>
      {/* <CounterApp /> */}
      {/* <ConditionalApp /> */}
      {/* <ErrorApp /> */}
      {/* <ProductApp /> */}
      <ShoppyCart/>
    </div>
  );
}
