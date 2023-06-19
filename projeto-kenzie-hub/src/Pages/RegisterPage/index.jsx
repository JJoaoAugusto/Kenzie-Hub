import { Link } from "react-router-dom"
import { FormRegister } from "./FormRegister"
import { StyledMain } from "./index.js"
import Logo from "../../assets/Logo.svg"
import { StyledButton } from "../../styles/StyledButton"

export const RegisterPage = () => {
    return (
        <StyledMain>
            <div className="header__register">
                <img className="kenzieHub__logo" src={Logo} alt="Logo Kenzie Hub" />
                <Link to="/"><StyledButton className="bkColor__grey-3">Voltar</StyledButton></Link>
            </div>
            <FormRegister />
        </StyledMain>
    )
}