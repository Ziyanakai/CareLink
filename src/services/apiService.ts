import type { AlertLog, Contact } from '../types';

/**
 * In a real application, this service would handle all HTTP requests
 * to the backend server.
 */

// Example: Send an alert to the backend
export const sendAlert = async (alertData: AlertLog): Promise<void> => {
  console.log('API_SERVICE: Sending alert to backend', alertData);
  // const response = await fetch('/api/alert', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(alertData),
  // });
  // if (!response.ok) {
  //   throw new Error('Failed to send alert');
  // }
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
};

// Example: Fetch contacts from the backend
export const fetchContacts = async (): Promise<Contact[]> => {
    console.log('API_SERVICE: Fetching contacts from backend');
    await new Promise(resolve => setTimeout(resolve, 500));
    return []; // Return mock or fetched data
}
