import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const {login, logout} = authSlice.actions;
export const selectIsLoggedIn = (state: {auth: AuthState}) =>
  state.auth.isLoggedIn;
export const selectUser = (state: {auth: AuthState}) => state.auth.user;

export default authSlice.reducer;
