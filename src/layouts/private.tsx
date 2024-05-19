import React from 'react'
import { useAuth } from '../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateLayout: React.FC = () => {
    const { isLoggedIn } = useAuth();
    // add a timeout to check for token. If the token is unverified then logout

    if (!isLoggedIn) {
        // Redirect to the auth page if not authenticated
        return <Navigate to="/auth/login" replace />;
    }

    return (
        <><Outlet /></>
    )
}

export default PrivateLayout;