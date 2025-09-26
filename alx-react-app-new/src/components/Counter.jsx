// src/components/Counter.jsx
import { useState } from 'react';

function Counter() {
  // initialize count state
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Counter App</h2>
      <p style={{ fontSize: '20px' }}>Current Count: {count}</p>

      <button
        style={{ margin: '5px', padding: '10px' }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <button
        style={{ margin: '5px', padding: '10px' }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>

      <button
        style={{ margin: '5px', padding: '10px' }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;