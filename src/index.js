import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import App2 from './App2';
import Greeter from './Greeter';
import StubAPI from './StubAPI';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <App2 /> */}
    {/* <Greeter/> */}
    <StubAPI/>
  </React.StrictMode>
);


