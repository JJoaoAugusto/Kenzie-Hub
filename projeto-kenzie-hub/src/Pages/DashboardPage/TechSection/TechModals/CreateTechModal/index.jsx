import { useContext } from "react"
import { TechContext } from "../../../../../providers/TechContext"
import { useForm } from "react-hook-form"
import { StyledCreateModal } from "./index.js"
import { Select } from "../../../../../components/Select/index.jsx"
import { Input } from "../../../../../components/Input/index.jsx"
import { StyledButton } from "../../../../../styles/ButtonsStyles/StyledButton"
import { StyledH2 } from "../../../../../styles/TipographyStyles/StyledH2"

export const CreateTechModal = () => {

    const { closeCreateModal, addTech } = useContext(TechContext)

    const { register, handleSubmit } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange",
        // resolver: zodResolver()
    })

    return (
        <StyledCreateModal>
            <form className="modal__container" onSubmit={handleSubmit(addTech)}>
                <div className="modal__header">
                    <StyledH2>Cadastrar tecnologia</StyledH2>
                    <button onClick={closeCreateModal}>X</button>
                </div>
                <div className="modal__content">
                    <Input type="text" label="Nome" placeholder="Nome da tecnologia" {...register("title")} />
                    <Select {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário" >Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </Select>
                    <StyledButton className="bkColor__primary" type="submit">Cadastrar Tecnologia</StyledButton>
                </div>

            </form>
        </StyledCreateModal>
    )
}