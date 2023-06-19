import { useNavigate } from "react-router-dom"
import { Header } from "./Header/index.jsx"
import { Main } from "./Main/index.jsx"

export const DashboardPage = ({ user }) => {

    const navigate = useNavigate()

    const logout = () => {
        confirm("Tem certeza que deseja sair?")
        localStorage.clear()
        navigate("/")
    }

    return (
        <>
            <Header logout={logout} user={user} />
            <Main />
        </>
    )
}