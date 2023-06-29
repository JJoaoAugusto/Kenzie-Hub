import { createContext, useEffect, useState } from "react"
import { api } from "../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        const currentPath = window.location.pathname
        const token = localStorage.getItem("@TOKEN")
        const loadUser = async () => {
            try {
                setLoading(true)
                const { data } = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
                navigate(currentPath)
            } catch (error) {
                console.log(error)
                localStorage.removeItem("@TOKEN")
                localStorage.removeItem("@USERID")
            } finally {
                setLoading(false)
            }
        }
        if (token) {
            loadUser()
        }
    }, [])

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

    const loginSubmit = (formData) => userLogin(formData)

    const userRegister = async (formData) => {
        try {
            await api.post("/users", formData)
            toast.success("Usuário registrado com sucesso!")
            navigate("/")
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }

    const registerSubmit = (formData) => userRegister(formData)

    const logout = () => {
        confirm("Tem certeza que deseja sair?")
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
        navigate("/")
        setUser(null)
    }

    return (
        <UserContext.Provider value={{ user, loginSubmit, registerSubmit, loading, logout }}>
            {children}
        </UserContext.Provider>
    )
}