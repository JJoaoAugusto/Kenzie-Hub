import { Link } from "react-router-dom"
import { FormRegister } from "./FormRegister"
import { StyledMain } from "./index.js"
import Logo from "../../assets/Logo.svg"
import { StyledButtonSmall } from "../../styles/ButtonsStyles/StyledButtonSmall.js"

export const RegisterPage = () => {
    return (
        <StyledMain>
            <div className="header__register">
                <img className="kenzieHub__logo" src={Logo} alt="Logo Kenzie Hub" />
                <Link to="/"><StyledButtonSmall className="bkColor__grey-3">Voltar</StyledButtonSmall></Link>
            </div>
            <FormRegister />
        </StyledMain>
    )
}