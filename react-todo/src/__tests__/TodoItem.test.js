import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    
    // Check if component renders
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    
    // Check if initial todos are displayed
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    
    // Check if form elements are present
    expect(screen.getByPlaceholderText('Add a new todo...')).toBeInTheDocument();
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
  });

  test('adds a new todo when form is submitted', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    // Add a new todo
    await user.type(input, 'New Test Todo');
    await user.click(addButton);
    
    // Check if new todo is added
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
  });

  test('toggles todo completion status when clicked', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const todoText = screen.getByText('Learn React');
    
    // Click to toggle completion
    await user.click(todoText);
    
    // Should have line-through style (completed)
    expect(todoText).toHaveStyle('text-decoration: line-through');
    
    // Click again to toggle back
    await user.click(todoText);
    
    // Should not have line-through style
    expect(todoText).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo when delete button is clicked', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const todoToDelete = screen.getByText('Write Tests');
    const deleteButtons = screen.getAllByText('Delete');
    
    // Check that todo exists before deletion
    expect(todoToDelete).toBeInTheDocument();
    
    // Delete the third todo (Write Tests)
    await user.click(deleteButtons[2]);
    
    // Check that todo is removed
    expect(todoToDelete).not.toBeInTheDocument();
  });

  test('displays correct todo statistics', () => {
    render(<TodoList />);
    
    // Check initial stats
    expect(screen.getByText(/Total: 3/)).toBeInTheDocument();
    expect(screen.getByText(/Completed: 1/)).toBeInTheDocument();
    expect(screen.getByText(/Pending: 2/)).toBeInTheDocument();
  });

  test('does not add empty todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const initialTodoCount = screen.getAllByText(/Delete/).length;
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    // Try to add empty todo
    await user.type(input, '   '); // Only spaces
    await user.click(addButton);
    
    // Check that no new todo was added
    const currentTodoCount = screen.getAllByText(/Delete/).length;
    expect(currentTodoCount).toBe(initialTodoCount);
  });

  test('clears input after adding todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    await user.type(input, 'Test Todo');
    await user.click(addButton);
    
    // Check if input is cleared
    expect(input).toHaveValue('');
  });
});