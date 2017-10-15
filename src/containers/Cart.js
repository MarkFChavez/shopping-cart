import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { removeToCart } from '../actions'
import { bindActionCreators } from 'redux'

class Cart extends Component {
  removeToCart (e, id) {
    e.preventDefault()
    this.props.removeToCart(id)
  }

  renderCartItems () {
    if (!this.props.cart.length) {
      return <div> No items </div>
    }

    const items = this.props.cart.map (item => {
      const product = this.props.products.find(product => product.id === item.id)

      return (
        <li key={item.id} className='list-group-item'>
          <div>
            <div> <small> {item.quantity} x {product.name} </small> </div>

            <div>
              <small> Php {item.quantity * product.amount} </small>
              <a href='#' onClick={(e) => this.removeToCart(e, item.id)} style={{ color: 'red' }}> <small>remove</small> </a>
            </div>
          </div>
        </li>
      )
    })

    return (
      <ul className='list-group'>
        {items}
      </ul>
    )
  }

  render () {
    return (
      <div className='col-4'>
        <p className='lead'> <b> Shopping Cart </b> </p>
        <hr />

        {this.renderCartItems()}

        {this.renderTotal()}
      </div>
    )
  }

  renderTotal () {
    if (!this.props.cart.length) {
      return null
    }

    const total = _.sum(this.props.cart.map(cartItem => {
      return this.props.products.find(product => product.id === cartItem.id).amount * cartItem.quantity
    }))

    return (
      <div style={{ float: 'right' }}>
        <p className='lead'> Total: <b>{total}</b> </p>
      </div>
    )
  }
}

function mapStateToProps ({ cart, products}) {
  return { cart, products }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    removeToCart
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)