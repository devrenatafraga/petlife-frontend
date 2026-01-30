import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should render PetLife title', () => {
    render(<App />);
    expect(screen.getByText(/PetLife/i)).toBeDefined();
  });

  it('should render initial counter with 0', () => {
    render(<App />);
    expect(screen.getByText(/Contador: 0/i)).toBeDefined();
  });

  it('should increment counter when button is clicked', () => {
    render(<App />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText(/Contador: 1/i)).toBeDefined();
  });

  it('should render info message', () => {
    render(<App />);
    expect(screen.getByText(/Em desenvolvimento/i)).toBeDefined();
  });
});
