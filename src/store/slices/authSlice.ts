import { createSlice,
    // PayloadAction  <if need be>
    } from '@reduxjs/toolkit';

// Define the type for the state
interface AuthState {
  isLoggedIn: boolean;
}

// Define the initial state with the type
const initialState: AuthState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // The type of the state is inferred, so no need to type the argument
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
