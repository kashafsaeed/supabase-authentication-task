import supabase from './config.js';





const signUpUser = async (email, password) => {
    const { data, error } = await supabase.supabase.auth.signUp({
        email,
        password,
    });
    if (error) {
        console.error('Error signing up:', error.message);
        return null;
    }
    console.log('User signed up successfully:', data);
    return data;
}
export default signUpUser;










