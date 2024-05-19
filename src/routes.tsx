import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RouteErrorPage from './components/utils/RouteErrorPage';
import SuspenseComponent from './components/utils/SuspenseComponent';
import PageWrapper from './components/utils/PageWrapper';
import PrivateLayout from './layouts/private';

// Layouts
const RootLayout = lazy(() => import('./layouts/root'));
const AuthLayout = lazy(() => import('./layouts/auth'));

// Pages
const ForgotPasswordPage = lazy(() => import('./pages/auth/forget-password'));
const LoginPage = lazy(() => import('./pages/auth/login'));
const DashboardPage = lazy(() => import('./pages/private/dashboard'));

export const router = createBrowserRouter([
    {
        // Redirect default route to /dashboard
        path: '/',
        element: (
            <SuspenseComponent>
                <RootLayout />
            </SuspenseComponent>
        ),
        errorElement: <RouteErrorPage />,
    },
    {
        path: '/auth',
        element: (
            <SuspenseComponent>
                <AuthLayout />
            </SuspenseComponent>
        ),
        errorElement: <RouteErrorPage />,
        children: [
            {
                // index: true,
                path: 'reset-password',
                element: (
                    <SuspenseComponent>
                        <PageWrapper title="Forgot Password" page={<ForgotPasswordPage />} />
                    </SuspenseComponent>
                ),
            },
            {
                path: 'login',
                element: (
                    <SuspenseComponent>
                        <PageWrapper title="Login" page={<LoginPage />} />
                    </SuspenseComponent>
                ),
            },
        ],
    },
    {
        path: '/dashboard',
        element: (
            <SuspenseComponent>
                <PrivateLayout />
            </SuspenseComponent>
        ),
        children: [
            {
                index: true,
                element: (
                    <SuspenseComponent>
                        <PageWrapper title="Dashboard" page={<DashboardPage />} />
                    </SuspenseComponent>
                ),
            },
        ],
    },
]);
