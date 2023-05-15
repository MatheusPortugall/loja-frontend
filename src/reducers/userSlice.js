import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    isLogged: false,
    error: null
  },
  reducers: {
    authUser(state, action) {
      return {...state, token: action.payload}
    },
    loginSuccess(state) {
      return {...state, isLogged: true}
    },
    loginError(state, action) {
      return {...state, isLogged: false, token: null, error: action.error}
    }
  }
})

export const { authUser, loginSuccess, loginError } = userSlice.actions;

export default userSlice.reducer;