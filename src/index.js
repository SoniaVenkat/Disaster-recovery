import React from 'react'
import { createRoot } from 'react-dom/client'
import 'core-js'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import { MsalProvider } from '@azure/msal-react';
import { msalInstance } from './msalConfig';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <MsalProvider instance={msalInstance}>
    <App />
  </MsalProvider>
  </Provider>
)
