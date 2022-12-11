import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const documentRoot = document.getElementById('root');
const root = ReactDOM.createRoot(documentRoot!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
