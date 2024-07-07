import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';
import '@testing-library/jest-dom/extend-expect';

describe('LoginForm', () => {
    test('renders LoginForm component', () => {
        render(<LoginForm />);

        // Check if the login header is rendered
        expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();

        // Check if the descriptive text is rendered
        expect(screen.getByText(/please enter your credentials to login/i)).toBeInTheDocument();

        // Check if the username input field is rendered
        const usernameInput = screen.getByPlaceholderText('Username');
        expect(usernameInput).toBeInTheDocument();
        expect(usernameInput).toHaveAttribute('type', 'text');
        expect(screen.getByLabelText('Username')).toBeInTheDocument();

        // Check if the password input field is rendered
        const passwordInput = screen.getByPlaceholderText('Password');
        expect(passwordInput).toBeInTheDocument();
        expect(passwordInput).toHaveAttribute('type', 'password');
        expect(screen.getByLabelText('Password')).toBeInTheDocument();

        // Check if the login button is rendered
        const loginButton = screen.getByRole('button', { name: /login/i });
        expect(loginButton).toBeInTheDocument();
        expect(loginButton).toHaveClass('bg-blue-500 hover:bg-blue-600 text-white my-10');
    });
});
