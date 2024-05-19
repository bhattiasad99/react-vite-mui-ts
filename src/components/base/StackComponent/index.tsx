import Stack, { StackProps } from '@mui/material/Stack';
import React from 'react'

type IProps = StackProps & {
    children: React.ReactNode,
    spacing?: string | number,
    direction?: 'row' | 'column'
}

const StackComponent: React.FC<IProps> = ({ spacing = 1, direction = 'row', children, ...otherProps }) => {
    return (
        <Stack spacing={spacing} direction={direction} {...otherProps}>{children}</Stack>
    )
}

export default StackComponent;