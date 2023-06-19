import { StyledH1 } from "../../../styles/TipographyStyles/StyledH1"
import Logo from "../../../assets/Logo.svg"
import { StyledHeader } from "."
import { StyledSpan } from "../../../styles/TipographyStyles/StyledSpan"
import { StyledButton } from "../../../styles/StyledButton"

export const Header = ({ logout, user }) => {
    return (
        <StyledHeader>
            <nav className="header__nav">
                <div className="nav__container">
                    <img className="kenzieHub__logo" src={Logo} alt="Logo Kenzie Hub" />
                    <StyledButton className="bkColor__grey-3" type="button" onClick={() => logout()}>Sair</StyledButton>
                </div>
            </nav>
            <div className="header__content">
                <div className="content__container">
                    <StyledH1>Olá, {user.name}</StyledH1>
                    <StyledSpan>{user.course_module}</StyledSpan>
                </div>
            </div>
        </StyledHeader>
    )
}