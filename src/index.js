import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// styles
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { QueryProvider } from './lib/react-query/QueryProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
          <App />
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>
);

