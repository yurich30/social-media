import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/storeRedux'
import StoreContext from './redux/StoreContext';

export function reRenderTree(state) {
    ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter>
            <StoreContext.Provider value={store}>
              <App
              dispatch={store.dispatch.bind(store)}
              store={store}
              />
            </StoreContext.Provider>
          </BrowserRouter>
        </React.StrictMode>,
      document.getElementById('root')
    );
}
reRenderTree(store.getState())
store.subscribe(reRenderTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
