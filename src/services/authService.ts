/**
 * This service will handle user authentication logic, such as
 * logging in, registering, logging out, and managing user sessions/tokens.
 */

export const login = async (email: string, pass: string): Promise<{ token: string }> => {
    console.log('AUTH_SERVICE: Logging in user', { email });
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
    return { token: 'fake-jwt-token' };
};

export const register = async (email: string, pass: string): Promise<void> => {
    console.log('AUTH_SERVICE: Registering user', { email });
    await new Promise(resolve => setTimeout(resolve, 500));
};

export const logout = (): void => {
    console.log('AUTH_SERVICE: Logging out user');
    // Clear user token from storage
};
