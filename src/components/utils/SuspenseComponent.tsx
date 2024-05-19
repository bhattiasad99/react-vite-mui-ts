import { Suspense } from "react";
import ErrorBoundaryComponent from "./ErrorBoundaryComponent";
import Loader from "./loader";

// Fallback component for lazy loading
export const Loading = () => <Loader />;

export type SuspenseComponentProps = {
    children: React.ReactNode
}

const SuspenseComponent: React.FC<SuspenseComponentProps> = ({ children }) => {
    return (
        <ErrorBoundaryComponent>
            <Suspense fallback={<Loading />}>{children}</Suspense>
        </ErrorBoundaryComponent>
    );
};

export default SuspenseComponent