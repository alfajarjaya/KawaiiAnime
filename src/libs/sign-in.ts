export const signIn = async () => {
    const response = await fetch('/api/auth/provider', { method: 'GET' });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
};
