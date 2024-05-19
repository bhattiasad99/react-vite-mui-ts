import { FC } from "react"
import BoxComponent from "../../../components/base/BoxComponent"
import LinkedButton from "../../../components/advance/LinkedButton"

type IProps = {
    // pageTitle: string
}

const RootPage: FC<IProps> = () => {
    return (
        <BoxComponent>
            <LinkedButton to="/auth/login">Get Started</LinkedButton>
        </BoxComponent>
    )
}

export default RootPage