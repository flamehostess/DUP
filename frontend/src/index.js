import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

// const cors = require('cors');
// const corsOptions ={
//   origin: 'http://localhost:3000',
//   credentials: true,
//   optionSuccessStatus: 200
// }
// App.use(cors(corsOptions));
//создадим свой собственны прокси сервер

// document.getElementById('choose_machine').setAttribute('disabled', 'disabled')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
