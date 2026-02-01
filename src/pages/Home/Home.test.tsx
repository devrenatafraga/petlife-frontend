import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

// Mock do useNavigate
const mockNavigate = vi.fn();

// Mock do react-router-dom antes dos imports
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Home Component', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('should render logo and title', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText('PetLife')).toBeInTheDocument();
    expect(screen.getByAltText('PetLife Logo')).toBeInTheDocument();
    expect(screen.getByText(/Cuide do seu pet com amor e organização/i)).toBeInTheDocument();
  });

  it('should render main CTA button', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const ctaButton = screen.getByRole('button', { name: /Começar a usar o PetLife/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveTextContent('Começar');
  });

  it('should navigate to /onboarding when CTA is clicked', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const ctaButton = screen.getByRole('button', { name: /Começar a usar o PetLife/i });
    fireEvent.click(ctaButton);

    expect(mockNavigate).toHaveBeenCalledWith('/onboarding');
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });

  it('should render all feature cards', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText('Organize rotinas')).toBeInTheDocument();
    expect(screen.getByText('Serviços próximos')).toBeInTheDocument();
    expect(screen.getByText('Tudo em um lugar')).toBeInTheDocument();
  });

  it('should render footer', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText(/PetLife © 2026/i)).toBeInTheDocument();
  });

  it('should have accessible button with aria-label', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const ctaButton = screen.getByLabelText('Começar a usar o PetLife');
    expect(ctaButton).toBeInTheDocument();
  });
});
