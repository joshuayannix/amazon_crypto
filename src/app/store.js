import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';
import appReducer from '../features/appSlice';
import userReducer from '../features/userSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    cart: cartReducer,
    user: userReducer
  }
});