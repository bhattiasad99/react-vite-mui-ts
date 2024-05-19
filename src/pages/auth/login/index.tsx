import ButtonComponent from "../../../components/base/ButtonComponent"
import { useAuth } from "../../../hooks/useAuth";

const LoginPage = () => {
    const { handleLogin } = useAuth();
    return (
        <ButtonComponent onClick={() => {
            handleLogin()
        }}>Login</ButtonComponent>
    )
}

export default LoginPage