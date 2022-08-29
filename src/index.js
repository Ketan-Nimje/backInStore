import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from '@shopify/polaris';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from '@shopify/app-bridge-react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@shopify/polaris/build/esm/styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
const config = { apiKey: '7211ae04088279b7a7ab799f63e96e56', host: 'dGgtY2hlY2tvdXQtdWkubXlzaG9waWZ5LmNvbS9hZG1pbg', forceRedirect: false };

root.render(
  <AppProvider>
    <Provider config={config}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
