import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import products from './products.js'
import CartReducer from './reducers/CartReducer'

const reducers = combineReducers({
  products: () => products,
  cart: CartReducer
})

const Root = () => {
  return (
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
