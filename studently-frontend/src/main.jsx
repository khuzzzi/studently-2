import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux'; // Import Redux Provider
import { store } from './reduxstore/store.js'; // Import your Redux store

// Import your publishable key



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <App />
    
    </Provider>
  </StrictMode>
);
