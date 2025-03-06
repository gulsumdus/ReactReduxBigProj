import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/root/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';//import
import store from "./redux/reducers/configureStore"//importing the store
import { Provider } from "react-redux"//import
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Choose a theme
import 'primereact/resources/primereact.min.css';  // Core PrimeReact styles
import 'primeicons/primeicons.css';  // PrimeIcons styles
import 'alertifyjs/build/css/alertify.min.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store= {store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
