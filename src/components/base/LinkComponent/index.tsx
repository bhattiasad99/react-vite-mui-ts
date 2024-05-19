import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export type LinkComponentProps = {
    children?: ReactNode;
    color?: string;
    styleOverrides?: React.CSSProperties;
    to: string;
    unstable_viewTransition?: boolean;
}

const LinkComponent: React.FC<LinkComponentProps> = ({
    styleOverrides,
    color = 'inherit',
    to = '#',
    children,
    unstable_viewTransition = true,
    ...otherProps
}) => {
    return (
        <Link
            to={to}
            style={{
                textDecoration: 'none',
                fontSize: 'inherit',
                color: color,
                fontWeight: 'inherit',
                ...styleOverrides,
            }}
            unstable_viewTransition={unstable_viewTransition}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default LinkComponent;