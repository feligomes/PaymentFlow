import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from './HomePage';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

test('renders HomePage and navigates to payment on button click', () => {
  const push = jest.fn();
  (useRouter as jest.Mock).mockReturnValue({ push });

  render(<HomePage />);

  expect(screen.getByText('Hi, Taylor')).toBeInTheDocument();

  expect(
    screen.getByText(
      'You have 6 medical bills ready from ABC Health System. You can pay your bills here or verify your identity to view full bill details.'
    )
  ).toBeInTheDocument();

  expect(screen.getByText('$600.00')).toBeInTheDocument();

  const payButton = screen.getByRole('button', { name: /Pay total/i });
  expect(payButton).toBeInTheDocument();

  fireEvent.click(payButton);

  expect(push).toHaveBeenCalledWith('/payment');
});
