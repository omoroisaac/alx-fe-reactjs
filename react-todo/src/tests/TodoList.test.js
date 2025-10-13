import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  // Test 1: Initial Render
  test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    
    // Check if the main component renders
    expect(screen.getByTestId('todo-list')).toBeInTheDocument();
    
    // Check if initial todos are displayed
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    
    // Check if form elements are present
    expect(screen.getByTestId('add-todo-form')).toBeInTheDocument();
    expect(screen.getByTestId('todo-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-button')).toBeInTheDocument();
  });

  // Test 2: Adding Todos
  test('adds a new todo when form is submitted', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    // Add a new todo
    await user.type(input, 'New Test Todo');
    await user.click(addButton);
    
    // Check if new todo is added
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    
    // Check if input is cleared after submission
    expect(input).toHaveValue('');
  });

  // Test 3: Adding empty todo
  test('does not add empty todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const initialTodoCount = screen.getAllByText(/todo/i).length;
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    // Try to add empty todo
    await user.type(input, '   '); // Only spaces
    await user.click(addButton);
    
    // Check that no new todo was added
    const currentTodoCount = screen.getAllByText(/todo/i).length;
    expect(currentTodoCount).toBe(initialTodoCount);
  });

  // Test 4: Toggling Todos
  test('toggles todo completion status when clicked', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const todoText = screen.getByText('Learn React');
    const todoItem = todoText.closest('[data-testid^="todo-item-"]');
    
    // Initially should not be completed
    expect(todoItem).not.toHaveClass('completed');
    
    // Click to toggle completion
    await user.click(todoText);
    
    // Should now be completed
    expect(todoItem).toHaveClass('completed');
    
    // Click again to toggle back
    await user.click(todoText);
    
    // Should not be completed again
    expect(todoItem).not.toHaveClass('completed');
  });

  // Test 5: Deleting Todos
  test('deletes a todo when delete button is clicked', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const todoToDelete = screen.getByText('Write Tests');
    const deleteButton = screen.getByTestId('delete-button-3'); // ID from initial data
    
    // Check that todo exists before deletion
    expect(todoToDelete).toBeInTheDocument();
    
    // Delete the todo
    await user.click(deleteButton);
    
    // Check that todo is removed
    expect(todoToDelete).not.toBeInTheDocument();
  });

  // Test 6: Form submission with Enter key
  test('adds todo when Enter key is pressed', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    
    // Type and press Enter
    await user.type(input, 'Todo with Enter{enter}');
    
    // Check if new todo is added
    expect(screen.getByText('Todo with Enter')).toBeInTheDocument();
  });

  // Test 7: Statistics display
  test('displays correct todo statistics', () => {
    render(<TodoList />);
    
    // Check initial stats (2 completed, 1 pending from initial data)
    expect(screen.getByText(/Total: 3/)).toBeInTheDocument();
    expect(screen.getByText(/Completed: 1/)).toBeInTheDocument();
    expect(screen.getByText(/Pending: 2/)).toBeInTheDocument();
  });

  // Test 8: Empty state
  test('displays empty state when no todos', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    // Delete all todos
    const deleteButtons = screen.getAllByText('Delete');
    for (const button of deleteButtons) {
      await user.click(button);
    }
    
    // Check empty state message
    expect(screen.getByText('No todos yet. Add one above!')).toBeInTheDocument();
    
    // Check stats show zero
    expect(screen.getByText(/Total: 0/)).toBeInTheDocument();
  });
});