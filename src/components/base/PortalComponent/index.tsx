import Portal, { PortalProps } from '@mui/material/Portal'
import React, { FC } from 'react'

type IProps = PortalProps & {
    children: React.ReactNode,
    container?: Element | (() => Element | null) | null;
}

const DEFAULT_CONTAINER = () => document.getElementById('root')

const PortalComponent: FC<IProps> = ({ container = DEFAULT_CONTAINER, children }) => {
    return (
        <Portal container={container}>{children}</Portal>
    )
}

export default PortalComponent