import { useContext } from "react"
import { TechCard } from "../TechCard/index.jsx"
import { TechContext } from "../../../../providers/TechContext"
import { StyledUl } from "./index.js"

export const TechList = () => {

    const { techs } = useContext(TechContext)

    return (
        <StyledUl>
            {techs.length > 0 ? techs.map(tech => <TechCard key={tech.id} tech={tech} />) : <p>Adicione suas tecnologias</p>}
        </StyledUl>
    )
}