import React, { useState } from 'react';

function Counter() {
  // State to hold the count
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Counter App</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Count: {count}</p>

      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={() => setCount(count + 1)} 
          style={{ margin: '5px', padding: '10px 20px' }}
        >
          Increment
        </button>

        <button 
          onClick={() => setCount(count - 1)} 
          style={{ margin: '5px', padding: '10px 20px' }}
        >
          Decrement
        </button>

        <button 
          onClick={() => setCount(0)} 
          style={{ margin: '5px', padding: '10px 20px' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
