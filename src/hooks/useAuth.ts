import { login, logout } from '../store/slices/authSlice';
import { RootState } from '../store/store';
import {  useDispatch, useSelector } from "react-redux";

export const useAuth = () => {
    const dispatch = useDispatch();
    
    const isLoggedIn = useSelector<RootState>(state => state.auth.isLoggedIn);

    const handleLogin = () => {
        dispatch(login())
    }
    
    const handleLogout = () => {
        dispatch(logout())
    }

	return {isLoggedIn, handleLogin, handleLogout};
};
