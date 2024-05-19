import { useRouteError } from 'react-router-dom';

// Define a type for the error object. Adjust according to the actual error object structure you expect.
interface RouteError {
    statusText?: string;
    message?: string;
}

export default function RouteErrorPage() {
    const error = useRouteError() as RouteError;  // Type assertion to ensure type safety

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
