import { PublicClientApplication } from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: import.meta.env.VITE_API_CLIENT_ID, // Replace with your Azure AD app's client ID
    authority: `https://login.microsoftonline.com/${import.meta.env.VITE_API_TENANT_ID}`, // Replace with your Azure AD tenant ID
    redirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: "sessionStorage", // You can change this to localStorage if needed
    storeAuthStateInCookie: true, // Set to true for some browser compatibility
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);
