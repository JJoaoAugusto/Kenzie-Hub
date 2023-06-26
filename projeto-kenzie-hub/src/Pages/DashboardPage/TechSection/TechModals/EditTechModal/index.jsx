import { useContext } from "react"
import { TechContext } from "../../../../../providers/TechContext"
import { useForm } from "react-hook-form"
import { StyledEditModal } from "."
import { StyledH2 } from "../../../../../styles/TipographyStyles/StyledH2"
import { Select } from "../../../../../components/Select/index.jsx"
import { Input } from "../../../../../components/Input/index.jsx"
import { StyledButton } from "../../../../../styles/ButtonsStyles/StyledButton"
import { StyledButtonSmall } from "../../../../../styles/ButtonsStyles/StyledButtonSmall"

export const EditTechModal = () => {

    const { submit, tech, closeEditModal, remove } = useContext(TechContext)

    const { register, handleSubmit } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange",
        // resolver: zodResolver()
    })

    return (
        <StyledEditModal>
            <form className="modal__container" onSubmit={handleSubmit(submit)}>
                <div className="modal__header">
                    <StyledH2>Tecnologia Detalhes</StyledH2>
                    <button onClick={closeEditModal}>X</button>
                </div>
                <div className="modal__content">
                    <Input type="text" readOnly value={tech.title} label="Nome" />
                    <Select {...register("status")}>
                        <option value="Iniciante" >Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </Select>
                    <div className="modal__buttons">
                        <StyledButton className="bkColor__primary-negative" type="submit">Salvar Alterações</StyledButton>
                        <StyledButtonSmall className="bkColor__grey-1" type="button" onClick={(e) => remove(e)}>Excluir</StyledButtonSmall>
                    </div>
                </div>

            </form>
        </StyledEditModal>
    )
}