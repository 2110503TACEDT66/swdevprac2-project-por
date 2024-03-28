// TopMenu.test.tsx

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TopMenu from '@/components/TopMenu';

// Mock getServerSession function to simulate session presence and absence
jest.mock('next-auth', () => ({
  getServerSession: jest.fn(),
}));
const { getServerSession } = require('next-auth');

describe('TopMenu component', () => {
  afterEach(() => {
    jest.resetAllMocks(); // Reset mock usage after each test
  });

  test('renders sign-out button when session is present', async () => {
    // Mock session presence
    getServerSession.mockResolvedValueOnce({ user: { name: 'Test User' } });

    render(<TopMenu />);

    // Wait for the component to render and check if sign-out button is present
    const signOutButton = await screen.findByText('Sign Out');
    expect(signOutButton).toBeInTheDocument();

    // Ensure other buttons are not rendered
    expect(screen.queryByText('Sign In')).not.toBeInTheDocument();
    expect(screen.queryByText('Register')).not.toBeInTheDocument();
  });

  test('renders sign-in and register buttons when session is absent', async () => {
    // Mock session absence
    getServerSession.mockResolvedValueOnce(null);

    render(<TopMenu />);

    // Wait for the component to render and check if sign-in and register buttons are present
    const signInButton = await screen.findByText('Sign In');
    const registerButton = await screen.findByText('Register');
    expect(signInButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();

    // Ensure sign-out button is not rendered
    expect(screen.queryByText('Sign Out')).not.toBeInTheDocument();
  });

  // Add more tests as needed for other scenarios or functionalities
});
