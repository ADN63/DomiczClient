import React from 'react';
import ReactDOM from 'react-dom/client';
import "./logo192.png";
import "./logo512.png";
import "./favicon.ico";
import './index.css';
// import AppRouter from './router/AppRouter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className='w-screen h-screen bg-orange-400'>
      App
    </div>
  </React.StrictMode>
);
