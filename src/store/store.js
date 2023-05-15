import { configureStore } from '@reduxjs/toolkit'
import authUser from './userSlice'

export default configureStore({
  reducer:{
    user: authUser,
  }
})