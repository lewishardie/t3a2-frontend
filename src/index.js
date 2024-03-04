import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// styles
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
// context
import { AuthProvider } from './context/AuthContext';
import { QueryProvider } from './context/QueryContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <QueryProvider>
            <App />
        </QueryProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

