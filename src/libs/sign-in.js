export const signIn = async () => {
    const response = await fetch('/api/auth/provider', { method: 'GET' })
    const data = response.json()
    return data
}