import { useContext } from "react"
import { TechList } from "./TechList/index.jsx"
import { TechContext } from "../../../providers/TechContext"
import { CreateTechModal } from "./TechModals/CreateTechModal/index.jsx"
import { EditTechModal } from "./TechModals/EditTechModal/index.jsx"
import { StyledSection } from "./index.js"
import { StyledH1 } from "../../../styles/TipographyStyles/StyledH1.js"
import ButtonPlus from "../../../assets/ButtonPlus.svg"

export const TechSection = () => {

    const { createModalIsOpen, openCreateModal, editModalIsOpen } = useContext(TechContext)

    return (
        <StyledSection className="tech__container">
            <div className="tech__header">
                <StyledH1>Technologias</StyledH1>
                <button onClick={openCreateModal}><img src={ButtonPlus} alt="Botão de Adicionar com a imagem do sinal matemático de adição" /></button>
            </div>
            <TechList />
            {createModalIsOpen ? <CreateTechModal /> : null}
            {editModalIsOpen ? <EditTechModal /> : null}
        </StyledSection>
    )
}