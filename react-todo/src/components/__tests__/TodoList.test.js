import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  test('renders todo list with initial elements', () => {
    render(<TodoList />);
    
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add a new todo...')).toBeInTheDocument();
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
    expect(screen.getByText('No todos yet. Add one above!')).toBeInTheDocument();
  });

  test('adds a new todo when Add Todo button is clicked', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'Test todo item' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Test todo item')).toBeInTheDocument();
    expect(screen.queryByText('No todos yet. Add one above!')).not.toBeInTheDocument();
  });

  test('adds a new todo when Enter key is pressed', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');

    fireEvent.change(input, { target: { value: 'Another test todo' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(screen.getByText('Another test todo')).toBeInTheDocument();
  });

  test('does not add empty todo', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);

    expect(screen.getByText('No todos yet. Add one above!')).toBeInTheDocument();
  });

  test('deletes a todo when Delete button is clicked', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');

    // Add a todo
    fireEvent.change(input, { target: { value: 'Todo to delete' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Todo to delete')).toBeInTheDocument();

    // Delete the todo
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    expect(screen.queryByText('Todo to delete')).not.toBeInTheDocument();
    expect(screen.getByText('No todos yet. Add one above!')).toBeInTheDocument();
  });

  test('toggles todo completion status when clicked', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');

    // Add a todo
    fireEvent.change(input, { target: { value: 'Todo to toggle' } });
    fireEvent.click(addButton);

    const todoText = screen.getByText('Todo to toggle');
    
    // Initially should not be completed
    expect(todoText).not.toHaveStyle('text-decoration: line-through');

    // Click to mark as completed
    fireEvent.click(todoText);
    
    // Should now be completed (have line-through)
    expect(todoText).toHaveStyle('text-decoration: line-through');

    // Click again to mark as incomplete
    fireEvent.click(todoText);
    
    // Should no longer be completed
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
  });

  test('handles multiple todos correctly', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');

    // Add multiple todos
    const todos = ['First todo', 'Second todo', 'Third todo'];
    
    todos.forEach(todo => {
      fireEvent.change(input, { target: { value: todo } });
      fireEvent.click(addButton);
    });

    // Check all todos are present
    todos.forEach(todo => {
      expect(screen.getByText(todo)).toBeInTheDocument();
    });

    // Delete the second todo
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[1]); // Delete second todo

    expect(screen.queryByText('Second todo')).not.toBeInTheDocument();
    expect(screen.getByText('First todo')).toBeInTheDocument();
    expect(screen.getByText('Third todo')).toBeInTheDocument();
  });

  test('clears input after adding todo', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'Test todo' } });
    expect(input.value).toBe('Test todo');

    fireEvent.click(addButton);
    expect(input.value).toBe('');
  });
});