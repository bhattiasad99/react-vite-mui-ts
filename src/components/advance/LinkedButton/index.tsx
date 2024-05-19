import React, { FC } from 'react'
import ButtonComponent, { ButtonComponentProps } from '../../base/ButtonComponent'
import LinkComponent, { LinkComponentProps } from '../../base/LinkComponent'
import { LinkProps } from 'react-router-dom'

type IProps = {
    children: React.ReactNode,
    linkProps?: LinkProps & LinkComponentProps,
    to: string;
    btnProps?: ButtonComponentProps
}


const LinkedButton: FC<IProps> = ({ children, to = '#', linkProps, btnProps }) => {
    return (
        <LinkComponent to={to} {...linkProps}><ButtonComponent {...btnProps}>{children}</ButtonComponent></LinkComponent>
    )
}

export default LinkedButton;