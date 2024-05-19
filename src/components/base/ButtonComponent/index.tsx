import Button, { ButtonProps } from '@mui/material/Button'
import React, { FC } from 'react'

export type ButtonComponentProps = ButtonProps & {
    children: React.ReactNode,
    variant?: "outlined" | 'text' | 'contained'
}

const ButtonComponent: FC<ButtonComponentProps> = ({ variant = 'contained', children, ...otherProps }) => {
    return (
        <Button variant={variant} {...otherProps}>{children}</Button>
    )
}

export default ButtonComponent;