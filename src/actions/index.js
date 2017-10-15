
export function addToCart (product) {
  return {
    type: 'ADD_TO_CART',
    payload: product
  }
}

export function removeToCart (id) {
  return {
    type: 'REMOVE_TO_CART',
    payload: id
  }
}