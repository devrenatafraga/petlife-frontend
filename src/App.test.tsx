import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should render PetLife title on home page', () => {
    render(<App />);
    expect(screen.getByText(/PetLife/i)).toBeDefined();
  });

  it('should render home page by default', () => {
    render(<App />);
    expect(screen.getByText(/Descubra o melhor em saúde e bem-estar para seu pet/i)).toBeDefined();
  });

  it('should have navigation to onboarding', () => {
    render(<App />);
    const onboardingLink = screen.getByRole('button', { name: /começar/i });
    expect(onboardingLink).toBeDefined();
  });
});
