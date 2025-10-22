import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  
  // Test 1: Initial Render Test
  test('renders TodoList component correctly with initial demo todos', () => {
    render(<TodoList />);
    
    // Verify main heading is rendered
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    
    // Verify input and button are rendered
    expect(screen.getByTestId('todo-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-button')).toBeInTheDocument();
    
    // Verify initial demo todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    
    // Verify todo list container is rendered
    expect(screen.getByTestId('todo-list')).toBeInTheDocument();
  });

  // Test 2: Adding Todos
  test('adds a new todo when user inputs text and clicks Add Todo button', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    // Get initial number of todos
    const initialTodos = screen.getAllByTestId(/todo-item-/);
    const initialCount = initialTodos.length;
    
    // Simulate user typing a new todo
    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    
    // Simulate user clicking Add Todo button
    fireEvent.click(addButton);
    
    // Verify new todo is added to the list
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    
    // Verify the total number of todos increased by 1
    const updatedTodos = screen.getAllByTestId(/todo-item-/);
    expect(updatedTodos).toHaveLength(initialCount + 1);
    
    // Verify input is cleared after adding
    expect(input.value).toBe('');
  });

  // Test 3: Adding todo with Enter key
  test('adds a new todo when user presses Enter key', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    
    // Get initial number of todos
    const initialTodos = screen.getAllByTestId(/todo-item-/);
    const initialCount = initialTodos.length;
    
    // Simulate user typing and pressing Enter
    fireEvent.change(input, { target: { value: 'Enter Key Todo' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });
    
    // Verify new todo is added
    expect(screen.getByText('Enter Key Todo')).toBeInTheDocument();
    
    // Verify the total number of todos increased by 1
    const updatedTodos = screen.getAllByTestId(/todo-item-/);
    expect(updatedTodos).toHaveLength(initialCount + 1);
  });

  // Test 4: Toggling Todos
  test('toggles todo between completed and not completed when clicked', () => {
    render(<TodoList />);
    
    // Find a todo that is not completed initially (Build a Todo App)
    const todoText = screen.getByText('Build a Todo App');
    
    // Verify it's not completed initially (no line-through)
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
    
    // Simulate clicking on the todo text to toggle completion
    fireEvent.click(todoText);
    
    // Verify it's now completed (has line-through)
    expect(todoText).toHaveStyle('text-decoration: line-through');
    
    // Click again to toggle back to not completed
    fireEvent.click(todoText);
    
    // Verify it's no longer completed
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
  });

  // Test 5: Toggle a completed todo
  test('toggles a completed todo back to not completed', () => {
    render(<TodoList />);
    
    // Find a todo that is completed initially (Learn React)
    const completedTodo = screen.getByText('Learn React');
    
    // Verify it's completed initially (has line-through)
    expect(completedTodo).toHaveStyle('text-decoration: line-through');
    
    // Click to toggle to not completed
    fireEvent.click(completedTodo);
    
    // Verify it's no longer completed
    expect(completedTodo).not.toHaveStyle('text-decoration: line-through');
  });

  // Test 6: Deleting Todos
  test('deletes a todo when delete button is clicked', () => {
    render(<TodoList />);
    
    // Find a todo to delete and its delete button
    const todoToDelete = screen.getByText('Write Tests');
    const deleteButton = screen.getByTestId('delete-button-3'); // ID from initial data
    
    // Verify the todo exists before deletion
    expect(todoToDelete).toBeInTheDocument();
    
    // Get initial number of todos
    const initialTodos = screen.getAllByTestId(/todo-item-/);
    const initialCount = initialTodos.length;
    
    // Simulate clicking the delete button
    fireEvent.click(deleteButton);
    
    // Verify the todo is no longer in the document
    expect(screen.queryByText('Write Tests')).not.toBeInTheDocument();
    
    // Verify the total number of todos decreased by 1
    const updatedTodos = screen.getAllByTestId(/todo-item-/);
    expect(updatedTodos).toHaveLength(initialCount - 1);
  });

  // Test 7: Empty state message
  test('shows empty message when all todos are deleted', () => {
    render(<TodoList />);
    
    // Delete all todos one by one
    const deleteButtons = screen.getAllByText('Delete');
    
    deleteButtons.forEach(button => {
      fireEvent.click(button);
    });
    
    // Verify empty message is shown
    expect(screen.getByTestId('no-todos-message')).toBeInTheDocument();
    expect(screen.getByText('No todos yet. Add one above!')).toBeInTheDocument();
    
    // Verify no todo items remain
    const remainingTodos = screen.queryAllByTestId(/todo-item-/);
    expect(remainingTodos).toHaveLength(0);
  });

  // Test 8: Prevent adding empty todos
  test('does not add empty or whitespace-only todos', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    // Get initial number of todos
    const initialTodos = screen.getAllByTestId(/todo-item-/);
    const initialCount = initialTodos.length;
    
    // Try to add empty todo
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(addButton);
    
    // Try to add whitespace-only todo
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);
    
    // Verify todo count remains the same
    const currentTodos = screen.getAllByTestId(/todo-item-/);
    expect(currentTodos).toHaveLength(initialCount);
  });
});