import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test, vi } from 'vitest';
import Header from '../components/Header';

// Mocking
vi.mock('./../images/logo.svg');
vi.mock('./../images/icon-arrow-down.svg');
vi.mock('./../images/desktop/image-header.jpg');
vi.mock('./../images/mobile/image-header.jpg');
vi.mock('./../images/icon-hamburger.svg');

describe('Header Component', () => {
  test('renders without crashing', () => {
    render(<Header />);

    const word = screen.getByTestId('test');

    expect(word).toBeInTheDocument();
  });

  test('renders images correctly', () => {
    render(<Header />);

    const img1 = screen.getByAltText('sunnyside');
    const img2 = screen.getByAltText('mobile-menu');

    expect(img1).toBeInTheDocument();
    expect(img2).toBeInTheDocument();
  });
});
