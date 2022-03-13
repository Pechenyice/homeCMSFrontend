import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from 'contexts/AuthContext';
import { ErrorsProvider } from 'contexts/ErrorsContext';
import { InfosProvider } from 'contexts/InfosContext';
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <ErrorsProvider>
      <InfosProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </InfosProvider>
    </ErrorsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
