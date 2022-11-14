import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import Media from './Media.css'

const root = ReactDOMClient.createRoot(document.querySelector('#root'))

root.render(<App />);


