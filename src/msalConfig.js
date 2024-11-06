import { PublicClientApplication } from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: "", // Replace with your Azure AD app's client ID
    authority: "https://login.microsoftonline.com/", // Replace with your Azure AD tenant ID
    redirectUri: window.location.origin,
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);
