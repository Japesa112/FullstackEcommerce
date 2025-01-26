const API_URL = process.env.EXPO_PUBLIC_API_URL;


export async function login(email: string, password: string) {
    console.log("API URL is: ", API_URL);

    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json(); // Parse response once

    if (!response.ok) {
        console.log("Error is: ", data);
        throw new Error(data.message || 'Login failed'); // Use the error message from the API response if available
    }

    console.log("Data is: ", data);
    return data; // Return parsed data directly
}
export async function register(email: string, password: string) {
    console.log("API URL is: ", `${API_URL}/auth/register`);

    const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json(); // Parse response once

    if (!response.ok) {
        console.log("Error is: ", data);
        throw new Error(data.message || 'Registration failed'); // Use error message from API response if available
    }

    console.log("Registration successful. Data is: ", data);
    return data; // Return parsed data
}
