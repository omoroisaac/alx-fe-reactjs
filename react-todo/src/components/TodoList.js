import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';
import './TodoList.css';

// Static array of initial todos
const initialTodos = [
  { id: 1, text: 'Learn React', completed: true },
  { id: 2, text: 'Build a Todo App', completed: false },
  { id: 3, text: 'Write Tests', completed: false }
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);

  // Method to add new todo
  const addTodo = (text) => {
    if (text.trim() !== '') {
      const newTodo = {
        id: Date.now(), // Simple ID generation
        text: text.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
    }
  };

  // Method to toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Method to delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      
      <AddTodoForm onAddTodo={addTodo} />
      
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="empty-message">No todos yet. Add one above!</p>
      )}

      <div className="todo-stats">
        <p>Total: {todos.length} | Completed: {todos.filter(todo => todo.completed).length} | Pending: {todos.filter(todo => !todo.completed).length}</p>
      </div>
    </div>
  );
};

export default TodoList;