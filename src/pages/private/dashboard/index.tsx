import ButtonComponent from "../../../components/base/ButtonComponent"
import { useAuth } from "../../../hooks/useAuth"

const DashboardPage = () => {
    const { handleLogout } = useAuth();
    return (
        <ButtonComponent onClick={() => {
            handleLogout()
        }}>Logout</ButtonComponent>
    )
}

export default DashboardPage