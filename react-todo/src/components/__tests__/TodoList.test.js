import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

// Mock initial todos data
const mockInitialTodos = [
  { id: 1, text: 'Learn React', completed: true },
  { id: 2, text: 'Build a Todo App', completed: false },
  { id: 3, text: 'Write Tests', completed: false }
];

describe('TodoList Component', () => {
  test('renders todo list with initial todos from static array', () => {
    render(<TodoList />);
    
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('displays AddTodoForm component', () => {
    render(<TodoList />);
    
    expect(screen.getByPlaceholderText('Add a new todo...')).toBeInTheDocument();
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
  });

  test('adds a new todo when form is submitted', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
  });

  test('toggles todo completion when clicked', () => {
    render(<TodoList />);
    
    const todoToToggle = screen.getByText('Build a Todo App');
    
    // Initially should not be completed
    expect(todoToToggle).not.toHaveStyle('text-decoration: line-through');

    // Click to mark as completed
    fireEvent.click(todoToToggle);
    
    // Should now be completed
    expect(todoToToggle).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo when delete button is clicked', () => {
    render(<TodoList />);
    
    const deleteButtons = screen.getAllByText('Delete');
    const todoToDelete = screen.getByText('Write Tests');
    
    expect(todoToDelete).toBeInTheDocument();
    
    // Click delete button for the third todo
    fireEvent.click(deleteButtons[2]);
    
    expect(screen.queryByText('Write Tests')).not.toBeInTheDocument();
  });

  test('displays correct todo statistics', () => {
    render(<TodoList />);
    
    expect(screen.getByText('Total: 3 | Completed: 1 | Pending: 2')).toBeInTheDocument();
  });

  test('does not add empty todo', () => {
    render(<TodoList />);
    
    const initialTodoCount = screen.getAllByRole('listitem').length;
    const addButton = screen.getByText('Add Todo');
    
    fireEvent.click(addButton);
    
    // Todo count should remain the same
    expect(screen.getAllByRole('listitem')).toHaveLength(initialTodoCount);
  });

  test('clears input after adding todo', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'Test todo' } });
    fireEvent.click(addButton);

    expect(input.value).toBe('');
  });
});