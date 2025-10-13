import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  // Test 1: Initial Render Test
  test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    
    // Verify component renders correctly
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    
    // Ensure initial state (demo todos) is rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  // Test 2: Adding Todos
  test('adds a new todo when form is submitted', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');
    
    // Use fireEvent to simulate user input
    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    
    // Use fireEvent to simulate form submission
    fireEvent.click(addButton);
    
    // Verify that new todo is added
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
  });

  // Test 3: Toggling Todos
  test('toggles todo between completed and not completed', () => {
    render(<TodoList />);
    
    const todoText = screen.getByText('Learn React');
    
    // Initially should not be completed
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
    
    // Click to toggle to completed
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');
    
    // Click again to toggle back to not completed
    fireEvent.click(todoText);
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
  });

  // Test 4: Deleting Todos
  test('deletes a todo item', () => {
    render(<TodoList />);
    
    const todoToDelete = screen.getByText('Write Tests');
    const deleteButtons = screen.getAllByText('Delete');
    
    // Verify todo exists before deletion
    expect(todoToDelete).toBeInTheDocument();
    
    // Click delete button for the third todo
    fireEvent.click(deleteButtons[2]);
    
    // Verify todo is deleted
    expect(screen.queryByText('Write Tests')).not.toBeInTheDocument();
  });
});