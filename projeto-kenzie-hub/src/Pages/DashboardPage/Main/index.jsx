import { StyledMain } from "."
import { StyledH1 } from "../../../styles/TipographyStyles/StyledH1"
import { StyledSpan } from "../../../styles/TipographyStyles/StyledSpan"

export const Main = () => {
    return (
        <StyledMain>
            <div className="main__info">
                <StyledH1>Que pena! Estamos em desenvolvimento :(</StyledH1>
                <StyledSpan>Nossa aplicação está em desenvolvimento, em breve teremos novidades</StyledSpan>
            </div>
        </StyledMain>
    )
}