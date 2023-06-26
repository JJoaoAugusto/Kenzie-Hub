import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../../../components/Input/index.jsx"
import { FormLoginSchema } from "../FormLoginSchema"
import { Link } from "react-router-dom"
import { StyledForm } from "../../../styles/StyledForm.js"
import { StyledButton } from "../../../styles/ButtonsStyles/StyledButton.js"
import { StyledH1 } from "../../../styles/TipographyStyles/StyledH1.js"
import { StyledSpan } from "../../../styles/TipographyStyles/StyledSpan.js"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext.jsx"

export const FormLogin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange",
        resolver: zodResolver(FormLoginSchema)
    })

    const { loginSubmit } = useContext(UserContext)

    return (
        <StyledForm onSubmit={handleSubmit(loginSubmit)} className="form__container">
            <div className="form__header">
                <StyledH1>Login</StyledH1>
            </div>
            <Input type="email" placeholder="Digite seu email" label="E-mail" {...register("email")} errors={errors.email} />
            <Input type="password" placeholder="Digite sua senha" label="Senha" {...register("password")} errors={errors.password} />
            <StyledButton className="bkColor__primary" type="submit">Entrar</StyledButton>
            <div className="div__register">
                <StyledSpan>Ainda não possui uma conta?</StyledSpan>
                <Link to="/register"><StyledButton>Cadastre-se</StyledButton></Link>
            </div>
        </StyledForm >
    )
}