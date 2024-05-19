// Import configureStore and ThunkAction, AnyAction from Redux Toolkit
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// Import the auth slice, assuming it is also properly typed
import authSlice from './slices/authSlice';


// Define the store with specific type definitions
export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

// Create a type for AppDispatch
export type AppDispatch = typeof store.dispatch;

// Create a type for the root state using the return type of the reducer
export type RootState = ReturnType<typeof store.getState>;

// Optional: Export a type for thunk actions if you use thunks in your application
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
