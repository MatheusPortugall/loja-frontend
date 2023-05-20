import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    error: null,
    message: ''
  },
  reducers: {
    addProductCart(state, action) {
      //const index = state.cart.findIndex(produto => produto.id === action.payload.id);
      //if(index != -1) // O objeto com o ID existe, então atualizamos a quantidade
       // return { ...state, cart: [...state.cart[index], action.payload.quantidadeCompra] };
     // else // O objeto com o ID não existe, então inserimos um novo objeto no array
        return { ...state, cart: action.payload };
    }
  }
});

export const { addProductCart } = cartSlice.actions;

export default cartSlice.reducer;