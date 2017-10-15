const CartReducer = (state = [], action) => {
  // { id: 1, quantity: 1 }
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.find(product => product.id === action.payload.id) !== undefined) {
        return state.map(product => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: product.quantity + 1 }
          }

          return product
        })
      } else {
        return state.concat({ id: action.payload.id, quantity: 1 })
      }
    case 'REMOVE_TO_CART':
      const itemIndex = state.findIndex(item => item.id === action.payload)
      return [
        ...state.splice(0, itemIndex),
        ...state.splice(itemIndex + 1)
      ]
    default:
      return state
  }
}

export default CartReducer