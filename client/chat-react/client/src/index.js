import {ConnectedRouter} from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {App} from './App';
// import reportWebVitals from './reportWebVitals';
import {store, history, persistor} from './store';

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
