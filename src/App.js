import React, { useState } from 'react';

const SimpleCounter = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-xl font-bold mb-4">Simple React Demo</h1>
      
      <div className="mb-4">
        <p className="text-gray-600">Count: {count}</p>
        <button 
          onClick={handleIncrement}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Type something..."
          className="w-full p-2 border rounded"
        />
        <p className="mt-2 text-gray-600">You typed: {text}</p>
      </div>
    </div>
  );
};

export default SimpleCounter;