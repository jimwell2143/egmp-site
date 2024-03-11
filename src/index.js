import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Providers from './store/Providers';
import { ModalMarker } from './components/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Inter:latin']
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
    <Providers>
        <ModalMarker />
        <ToastContainer />
        <App />
    </Providers>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
