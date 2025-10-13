import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AddTodoForm from '../components/AddTodoForm';

describe('AddTodoForm Component', () => {
  test('calls onAdd with input value when form is submitted', async () => {
    const mockOnAdd = jest.fn();
    const user = userEvent.setup();
    
    render(<AddTodoForm onAdd={mockOnAdd} />);
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    await user.type(input, 'Test Todo');
    await user.click(addButton);
    
    expect(mockOnAdd).toHaveBeenCalledWith('Test Todo');
  });

  test('disables button when input is empty', () => {
    render(<AddTodoForm onAdd={jest.fn()} />);
    
    const addButton = screen.getByTestId('add-button');
    expect(addButton).toBeDisabled();
  });

  test('enables button when input has text', async () => {
    const user = userEvent.setup();
    render(<AddTodoForm onAdd={jest.fn()} />);
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    await user.type(input, 'Test');
    
    expect(addButton).not.toBeDisabled();
  });
});