import { FC } from 'react'
import { Navigate } from 'react-router-dom'

const RootLayout: FC = () => {
    return (
        <><Navigate to="/dashboard" /></>
    )
}

export default RootLayout