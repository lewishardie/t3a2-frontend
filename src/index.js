import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// styles
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
// context
import { AuthProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

