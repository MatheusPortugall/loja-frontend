import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    isLogged: false,
    error: null,
    user: null
  },
  reducers: {
    authUser(state, action) {
      return { ...state, user: action.payload };
    },
    loginSuccess(state, action) {
      return { ...state, isLogged: true, token: action.payload };
    },
    loginError(state, action) {
      return { ...state, isLogged: false, token: null, error: action.error };
    }
  }
});

export const { authUser, loginSuccess, loginError } = userSlice.actions;

export default userSlice.reducer;