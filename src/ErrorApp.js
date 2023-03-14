import React from 'react';
import './style.css';
import { useState } from 'react';

const ErrorApp = () => {
  const [error, setError] = useState('');

  return (
    <div>
      {error && <h1>{error}</h1>}
      <button onClick={() => setError('Error al consumir la API')}>
        CLICK
      </button>
      <button onClick={() => setError('')}>OK</button>
    </div>
  );
};

export default ErrorApp;
