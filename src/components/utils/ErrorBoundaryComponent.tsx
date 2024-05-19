import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundaryComponent extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(err: Error): State {
        console.error(err)
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return <h1>Sorry.. there was an error</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundaryComponent;

// import PropTypes from 'prop-types';
// import React from 'react';
// import AlertComponent from '../components/atoms/AlertComponent';

// import LinkComponent from '../components/atoms/LinkComponent';
// import BoxComponent from '../components/atoms/boxComponent/BoxComponent';
// import { minHeight } from '../pages/ViewCampaign';

// class ErrorBoundaryComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false, message: '' };
//     }

//     static getDerivedStateFromError(error) {
//         // Update state so the next render will show the fallback UI.
//         return { hasError: true, message: error.message };
//     }

//     componentDidCatch(error, errorInfo) {
//         // You can also log the error to an error reporting service
//         console.log({ error, errorInfo });
//     }

//     render() {
//         if (this.state.hasError) {
//             // You can render any custom fallback UI
//             return (
//                 <BoxComponent sx={{ minHeight: minHeight, mt: 1 }}>
//                     <AlertComponent severity="error">
//                         We got a little problem and couldn&apos;t complete your request.
//                         Please try again.{''}
//                         <LinkComponent
//                             styleOverrides={{ color: 'blue', marginLeft: '10px' }}
//                             to="/"
//                         >
//                             Back to Home
//                         </LinkComponent>
//                     </AlertComponent>
//                 </BoxComponent>
//             );
//         }

//         return this.props.children;
//     }
// }

// ErrorBoundaryComponent.propTypes = {
//     children: PropTypes.any,
// };
// export default ErrorBoundaryComponent;
