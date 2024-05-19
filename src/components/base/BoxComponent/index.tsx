import Box, { BoxProps } from '@mui/material/Box';
import React from 'react'

type IProps = BoxProps & {
    children: React.ReactNode
}

const BoxComponent: React.FC<IProps> = ({ children }) => {
    return (
        <Box>{children}</Box>
    )
}

export default BoxComponent;