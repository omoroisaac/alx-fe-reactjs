import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div 
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      data-testid={`todo-item-${todo.id}`}
    >
      <span 
        className="todo-text"
        onClick={() => onToggle(todo.id)}
        data-testid={`todo-text-${todo.id}`}
      >
        {todo.text}
      </span>
      <button 
        onClick={() => onDelete(todo.id)}
        className="delete-button"
        data-testid={`delete-button-${todo.id}`}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;