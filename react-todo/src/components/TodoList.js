import React, { useState } from 'react';

const TodoList = () => {
  // Initialize with static array as required
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: true },
    { id: 3, text: 'Write Tests', completed: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  // Add todo method
  const addTodo = (text) => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  // Toggle todo method
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete todo method
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue);
  };

  return (
    <div>
      <h1>Todo List</h1>
      
      {/* AddTodoForm integrated as required */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>

      {/* Display list of todos */}
      <div>
        {todos.map(todo => (
          <div key={todo.id} style={{ 
            textDecoration: todo.completed ? 'line-through' : 'none',
            margin: '10px 0',
            padding: '10px',
            border: '1px solid #ccc'
          }}>
            <span 
              onClick={() => toggleTodo(todo.id)}
              style={{ cursor: 'pointer' }}
            >
              {todo.text}
            </span>
            <button 
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;