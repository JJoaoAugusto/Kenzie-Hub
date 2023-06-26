import { StyledH1 } from "../../../styles/TipographyStyles/StyledH1.js"
import Logo from "../../../assets/Logo.svg"
import { StyledHeader } from "."
import { StyledSpan } from "../../../styles/TipographyStyles/StyledSpan"
import { StyledButtonSmall } from "../../../styles/ButtonsStyles/StyledButtonSmall.js"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext"

export const Header = () => {

    const { user, logout } = useContext(UserContext)

    return (
        <StyledHeader>
            <nav className="header__nav">
                <div className="nav__container">
                    <img className="kenzieHub__logo" src={Logo} alt="Logo Kenzie Hub" />
                    <StyledButtonSmall className="bkColor__grey-3" type="button" onClick={logout}>Sair</StyledButtonSmall>
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