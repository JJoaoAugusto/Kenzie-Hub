import { useContext } from "react"
import { TechContext } from "../../../../providers/TechContext"
import { StyledLi } from "./index.js"
import { StyledSpan } from "../../../../styles/TipographyStyles/StyledSpan"
import { StyledH2 } from "../../../../styles/TipographyStyles/StyledH2"

export const TechCard = ({ tech }) => {

    const { setEditModalIsOpen, setTech } = useContext(TechContext)

    return (
        <StyledLi onClick={() => {
            setEditModalIsOpen(true)
            setTech(tech)
        }}>
            <StyledH2>{tech.title}</StyledH2>
            <StyledSpan>{tech.status}</StyledSpan>
        </StyledLi>
    )
}
