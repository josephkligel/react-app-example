import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <div className='row'>
          <div className='col'>
              <App msg="Hello, World!" />
          </div>
      </div>
    </div>
  </React.StrictMode>
);