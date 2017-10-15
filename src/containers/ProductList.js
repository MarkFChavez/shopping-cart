import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { bindActionCreators } from 'redux'

class ProductList extends Component {

  addToCart (e, product) {
    e.preventDefault()
    this.props.addToCart(product)
  }

  renderProducts () {
    return this.props.products.map(product => {
      return (
        <tr key={product.id}>
          <td> {product.name} </td>
          <td> <img src={product.image} width='120' height='80' /> </td>
          <td> Php {product.amount} </td>
          <td>
            <a href='#' onClick={(e) => this.addToCart(e, product)}> Add to cart </a>
          </td>
        </tr>
      )
    })
  }

  render () {
    return (
      <div className='col-8'>
        <h2> <b> BB Travel and Tours </b> </h2>

        <table className='table table-bordered'>
          <thead>
            <tr>
              <th> Package name </th>
              <th> Image </th>
              <th> Amount </th>
              <th> &nbsp; </th>
            </tr>
          </thead>

          <tbody>
            {this.renderProducts()}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps ({ products }) {
  return { products }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addToCart
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)