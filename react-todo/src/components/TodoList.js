import React, { useState } from 'react';

// Initial todos array (static as required)
const initialTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build a Todo App', completed: true },
  { id: 3, text: 'Write Tests', completed: false }
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [inputValue, setInputValue] = useState('');

  // Add todo function
  const addTodo = (text) => {
    if (text.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete todo function
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      
      {/* Add Todo Form */}
      <form onSubmit={handleSubmit} className="add-todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
          className="todo-input"
        />
        <button type="submit" className="add-button">
          Add Todo
        </button>
      </form>

      {/* Todo Items List */}
      <div className="todos-container">
        {todos.length === 0 ? (
          <p>No todos available</p>
        ) : (
          todos.map(todo => (
            <div 
              key={todo.id} 
              className={`todo-item ${todo.completed ? 'completed' : ''}`}
            >
              <span 
                onClick={() => toggleTodo(todo.id)}
                className="todo-text"
                style={{ 
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  cursor: 'pointer'
                }}
              >
                {todo.text}
              </span>
              <button 
                onClick={() => deleteTodo(todo.id)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      {/* Todo Statistics */}
      <div className="todo-stats">
        Total: {todos.length} | 
        Completed: {todos.filter(t => t.completed).length} | 
        Pending: {todos.filter(t => !t.completed).length}
      </div>
    </div>
  );
};

export default TodoList;