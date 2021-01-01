import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import BrowserRouter from '../lib/router/BrowserRouter.jsx';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Header />
      <Content />
    </div>
  </BrowserRouter>
);

export default App;
