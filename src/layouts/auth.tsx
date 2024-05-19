import React from 'react'
import { useAuth } from '../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';


const AuthLayout: React.FC = () => {
    const { isLoggedIn } = useAuth();

    return <>{isLoggedIn ? <Navigate to="/dashboard" replace /> : <><Outlet /></>}</>;
}

export default AuthLayout