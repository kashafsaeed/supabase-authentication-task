import supabase  from './config.js';

 async function login(username, password) {
    const client = createclient();
    try {
        const response = await client.post('/login', {
            username: username,
            password: password
        });
        return response.data;
    } catch (error) {
        throw new Error('Login failed: ' + error.message);
    }
}
 async function logout() {
    const client = createclient();
    try {
        const response = await client.post('/logout');
        return response.data;
    } catch (error) {
        throw new Error('Logout failed: ' + error.message);
    }


}
    export { login, logout };
function createclient() {
    return supabase;
}

