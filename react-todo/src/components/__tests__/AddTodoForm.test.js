import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddTodoForm from '../AddTodoForm';

describe('AddTodoForm Component', () => {
  const mockOnAddTodo = jest.fn();

  beforeEach(() => {
    mockOnAddTodo.mockClear();
  });

  test('renders form with input and button', () => {
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);
    
    expect(screen.getByPlaceholderText('Add a new todo...')).toBeInTheDocument();
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
  });

  test('calls onAddTodo with input value when form is submitted', () => {
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(addButton);

    expect(mockOnAddTodo).toHaveBeenCalledWith('Test Todo');
    expect(mockOnAddTodo).toHaveBeenCalledTimes(1);
  });

  test('calls onAddTodo when Enter key is pressed', () => {
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');

    fireEvent.change(input, { target: { value: 'Enter Key Todo' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(mockOnAddTodo).toHaveBeenCalledWith('Enter Key Todo');
  });

  test('disables button when input is empty', () => {
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);
    
    const addButton = screen.getByText('Add Todo');
    expect(addButton).toBeDisabled();

    const input = screen.getByPlaceholderText('Add a new todo...');
    fireEvent.change(input, { target: { value: '   ' } });
    
    expect(addButton).toBeDisabled();
  });

  test('enables button when input has text', () => {
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'Valid Todo' } });
    
    expect(addButton).not.toBeDisabled();
  });
});