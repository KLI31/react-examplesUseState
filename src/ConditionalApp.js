import React from 'react';
import './style.css';
import { useState } from 'react';

const ConditionalAPP = () => {
  const [condition, setCondition] = useState(true);

  return (
    <div>
      <button onClick={() => setCondition(!condition)}>Change text</button>
      {condition && <h1>Mensaje en verdadero</h1>}
      <h1> el valor del estado actualmente es: {condition.toString()}</h1>
    </div>
  );
};

export default ConditionalAPP;
