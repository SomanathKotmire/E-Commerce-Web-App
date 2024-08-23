import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

export const addCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let product = action.payload
      let findProduct = state.find((item) => item.id === product.id)
      if (findProduct) {
        findProduct.quantity += 1
      } else {
        state.push({ ...product, quantity: 1 })
      }
      localStorage.setItem('cart', JSON.stringify(state))
    },
    removeFromCart: (state, action) => {
      let productId = action.payload
      let updatedState = state.filter((item) => item.id !== productId)
      localStorage.setItem('cart', JSON.stringify(updatedState))
      return updatedState
    },
    incrementQuantity: (state, action) => {
      let productId = action.payload
      let findProduct = state.find((item) => item.id === productId)
      if (findProduct) {
        findProduct.quantity += 1
      }
      localStorage.setItem('cart', JSON.stringify(state))
    },
    decrementQuantity: (state, action) => {
      let productId = action.payload
      let findProduct = state.find((item) => item.id === productId)
      if (findProduct && findProduct.quantity > 1) {
        findProduct.quantity -= 1
      }
      localStorage.setItem('cart', JSON.stringify(state))
    }
  },
})

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = addCartSlice.actions

export default addCartSlice.reducer
