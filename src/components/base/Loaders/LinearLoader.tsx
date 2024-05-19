import React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

interface LinearLoaderProps extends LinearProgressProps {
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query';
}

const LinearLoader: React.FC<LinearLoaderProps> = ({
    color = 'primary',
    variant = 'indeterminate',
    ...otherProps
}) => {
    return <LinearProgress color={color} variant={variant} {...otherProps} />;
};

export default LinearLoader;