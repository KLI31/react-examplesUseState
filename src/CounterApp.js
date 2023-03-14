import React from 'react';
import './style.css';
import { useState } from 'react';

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Clicks: {counter} </h1>
      <div class="btn_increment">
        <button class="button" onClick={() => incrementCounter()}>
          Increment
        </button>
      </div>
      <div class="btn_increment">
        <button class="button_cancel" onClick={() => decrementCounter()}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
