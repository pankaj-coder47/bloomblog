import { configureStore } from '@reduxjs/toolkit'
import {authSlice} from '../features/index'

const store = configureStore({
  reducer:{
    auth:authSlice,
  }
});

export default store;