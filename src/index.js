import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

function Root() {
  return (
      <BrowserRouter>
        <App />
      </BrowserRouter>

    );


  }
const root = ReactDOM.createRoot(document.getElementById('root'))
const element = <Root />
root.render(element)
