import React, { Component } from 'react';
import ProductList from './containers/ProductList'
import Cart from './containers/Cart'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row' style={{ margin: '20px 0px' }}>
          <ProductList />
          <Cart />
        </div>
      </div>
    );
  }
}

export default App;
