import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should render PetLife title on home page', () => {
    render(<App />);
    expect(screen.getByText('PetLife')).toBeDefined();
  });

  it('should render home page by default', () => {
    render(<App />);
    expect(screen.getByText(/Cuide do seu pet com amor e organização/i)).toBeDefined();
  });

  it('should have navigation to onboarding', () => {
    render(<App />);
    const onboardingButton = screen.getByRole('button', { name: /Começar/i });
    expect(onboardingButton).toBeDefined();
  });
});
