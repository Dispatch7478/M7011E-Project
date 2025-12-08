import axios from 'axios';

// Create a configured Axios instance for secured API calls
const securedApi = axios.create({
    // Use the public IP and NodePort of your Backend service running in the cluster
    baseURL: 'https://api.ltu-m7011e-4.se', 
    timeout: 10000,
});

/**
 * Axios Request Interceptor: Attaches the JWT to the Authorization header.
 */
securedApi.interceptors.request.use(async (config) => {
    const keycloak = window.keycloakInstance; 

    if (keycloak && keycloak.authenticated) {
        try {
            // Update token if it's about to expire (Crucial for long sessions)
            await keycloak.updateToken(5);
            
            // Attach the JWT (Access Token) as a Bearer token
            config.headers.Authorization = `Bearer ${keycloak.token}`;
            
        } catch (error) {
            console.error('Failed to update Keycloak token. User may need to re-authenticate.', error);
        }
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default securedApi;