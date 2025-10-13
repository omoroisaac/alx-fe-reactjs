import React, { useState } from 'react';

const AddTodoForm = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form" data-testid="add-todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo..."
        className="todo-input"
        data-testid="todo-input"
      />
      <button 
        type="submit" 
        className="add-button"
        data-testid="add-button"
        disabled={!inputValue.trim()}
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;