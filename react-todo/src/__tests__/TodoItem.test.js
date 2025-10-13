import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import TodoItem from '../components/TodoItem';

describe('TodoItem Component', () => {
  const mockTodo = {
    id: 1,
    text: 'Test Todo',
    completed: false
  };

  test('renders todo item correctly', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={jest.fn()} 
        onDelete={jest.fn()} 
      />
    );

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  test('calls onToggle when todo text is clicked', async () => {
    const mockOnToggle = jest.fn();
    const user = userEvent.setup();
    
    render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={mockOnToggle} 
        onDelete={jest.fn()} 
      />
    );

    await user.click(screen.getByText('Test Todo'));
    expect(mockOnToggle).toHaveBeenCalledWith(1);
  });

  test('calls onDelete when delete button is clicked', async () => {
    const mockOnDelete = jest.fn();
    const user = userEvent.setup();
    
    render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={jest.fn()} 
        onDelete={mockOnDelete} 
      />
    );

    await user.click(screen.getByText('Delete'));
    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });

  test('applies completed class when todo is completed', () => {
    const completedTodo = { ...mockTodo, completed: true };
    
    render(
      <TodoItem 
        todo={completedTodo} 
        onToggle={jest.fn()} 
        onDelete={jest.fn()} 
      />
    );

    const todoItem = screen.getByTestId('todo-item-1');
    expect(todoItem).toHaveClass('completed');
  });
});