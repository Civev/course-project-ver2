import { createSlice } from '@reduxjs/toolkit';
//срез состояние. Когда меняется состояние вызывается slice. Возврощает изменённое состояние
const initialState = {
  state: [],
  cart: []
};
const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
      setSorted: (state, action) => {
        state.sorted = action.payload;
      }
    }})
    const cartSlice = createSlice({
      name: 'cart',
      initialState,
      reducers: {
          addCart: (state, action) => {
            state.cart = [...state.cart, action.payload]
          },
        delCart: (state, action) =>
        {
          state.cart = state.cart.filter(item => item.title !== action.payload)
        }

        
        }})
        

export const {  } = stateSlice.actions;
export const {addCart, delCart} = cartSlice.actions;

export const stateReducer = stateSlice.reducer; 
export const cartReducer = cartSlice.reducer;