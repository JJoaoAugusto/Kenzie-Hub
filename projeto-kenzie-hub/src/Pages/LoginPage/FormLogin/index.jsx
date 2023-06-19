import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../../../components/Input/index.jsx"
import { FormLoginSchema } from "../FormLoginSchema"
import { api } from "../../../services/api"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { StyledForm } from "../../../styles/StyledForm.js"
import { StyledButton } from "../../../styles/StyledButton.js"
import { StyledH1 } from "../../../styles/TipographyStyles/StyledH1.js"
import { StyledSpan } from "../../../styles/TipographyStyles/StyledSpan.js"

export const FormLogin = ({ setUser }) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange",
        resolver: zodResolver(FormLoginSchema)
    })

    const navigate = useNavigate()

    const userLogin = async (formData) => {
        try {
            const { data } = await api.post("/sessions", formData)

            localStorage.setItem("@TOKEN", data.token)
            localStorage.setItem("@USERID", data.user.id)

            setUser(data.user)
            toast.success("Usuário logado com sucesso!")
            navigate("/dashboard")

        } catch (error) {
            toast.error("Ops! Algo deu errado")
        }
    }

    const submit = (formData) => userLogin(formData)

    return (
        <StyledForm onSubmit={handleSubmit(submit)} className="form__container">
            <div className="form__header">
                <StyledH1>Login</StyledH1>
            </div>
            <Input type="email" placeholder="Digite seu email" label="E-mail" {...register("email")} errors={errors.email} />
            <Input type="password" placeholder="Digite sua senha" label="Senha" {...register("password")} errors={errors.password} />
            <StyledButton className="bkColor__primary" type="submit">Entrar</StyledButton>
            <div className="div__register">
                <StyledSpan>Ainda não possui uma conta?</StyledSpan>
                <Link to="/register"><StyledButton className="bkColor__primary-negative">Cadastre-se</StyledButton></Link>
            </div>
        </StyledForm >
    )
}