import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../../../components/Input/index.jsx"
import { FormRegisterSchema } from "../FormRegisterSchema"
import { Select } from "../../../components/Select/index.jsx"
import { StyledForm } from "../../../styles/StyledForm.js"
import { StyledButton } from "../../../styles/ButtonsStyles/StyledButton.js"
import { StyledH1 } from "../../../styles/TipographyStyles/StyledH1.js"
import { StyledSpan } from "../../../styles/TipographyStyles/StyledSpan.js"
import { UserContext } from "../../../providers/UserContext.jsx"
import { useContext } from "react"

export const FormRegister = () => {

    const { registerSubmit } = useContext(UserContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange",
        resolver: zodResolver(FormRegisterSchema)
    })

    return (
        <StyledForm onSubmit={handleSubmit(registerSubmit)} className="form__container">
            <div className="form__header">
                <StyledH1>Crie sua conta</StyledH1>
                <StyledSpan>Rápido e grátis, vamos nessa</StyledSpan>
            </div>
            <Input type="email" placeholder="Digite seu email" label="E-mail" {...register("email")} errors={errors.email} />
            <Input type="text" placeholder="Digite seu nome" label="Nome" {...register("name")} errors={errors.name} />
            <Input type="password" placeholder="Digite sua senha" label="Senha" {...register("password")} errors={errors.password} />
            <Input type="password" placeholder="Digite sua senha novamente" label="Confirmar Senha" {...register("confirm")} errors={errors.confirm} />
            <Input type="text" placeholder="Digite sua bio" label="Bio" {...register("bio")} errors={errors.bio} />
            <Input type="text" placeholder="Digite seu contato" label="Contato" {...register("contact")} errors={errors.contact} />
            <Select label="Selecionar Módulo" {...register("course_module")} errors={errors.course_module}>
                <option value="Primeiro Módulo">Primeiro Módulo</option>
                <option value="Segundo Módulo">Segundo Módulo</option>
            </Select>

            <StyledButton className="bkColor__primary-negative" type="submit">Cadastrar</StyledButton>
        </StyledForm>
    )
}