import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // استيراد Provider من react-redux
import App from './App.jsx';
import './index.css';
import store from "./Redux/store.js"; // استيراد store

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
