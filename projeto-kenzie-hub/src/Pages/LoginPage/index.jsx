import { FormLogin } from "./FormLogin/index.jsx"
import { StyledMain } from "./index.js"
import Logo from "../../assets/Logo.svg"

export const LoginPage = () => {

    return (
        <StyledMain>
            <div className="header__login">
                <img className="kenzieHub__logo" src={Logo} alt="Logo Kenzie Hub" />
            </div>
            <FormLogin />
        </StyledMain>
    )
}