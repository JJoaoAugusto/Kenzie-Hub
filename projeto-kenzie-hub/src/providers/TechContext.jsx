import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../services/api"
import { UserContext } from "./UserContext"
import { toast } from "react-toastify"

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {

    const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
    const [editModalIsOpen, setEditModalIsOpen] = useState(false)
    const [tech, setTech] = useState(null)
    const [techs, setTechs] = useState([])

    const { user } = useContext(UserContext)

    const token = localStorage.getItem("@TOKEN")

    const openCreateModal = () => setCreateModalIsOpen(true)
    const closeCreateModal = () => setCreateModalIsOpen(false)

    const openEditModal = (e) => {
        setEditModalIsOpen(true)
    }
    const closeEditModal = () => setEditModalIsOpen(false)

    useEffect(() => {
        setTechs(user.techs)
    }, [])

    const addTech = async (formData) => {
        try {
            const { data } = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `bearer ${token}`
                }
            })
            setTechs([...techs, data])
            closeCreateModal()
            toast.info("Tecnologia adicionada com sucesso!")
        } catch (error) {
            console.log(error)
            toast.error("Erro! Algo aconteceu")
        }
    }

    const editTech = async (formData) => {
        try {
            const { data } = await api.put(`/users/techs/${tech.id}`, formData, {
                headers: {
                    Authorization: `bearer ${token}`
                }
            })
            const techsUpdate = techs.map(tech => {
                if (tech.id === data.id) {
                    return data
                }
                return tech
            })
            setTechs(techsUpdate)
            toast.info("Tecnologia editada com sucesso!")
        } catch (error) {
            console.log(error)
            toast.error("Erro! Algo aconteceu")
        }
    }

    const submit = async (data) => {
        await editTech(data)
        closeEditModal()
    }

    const removeTech = async () => {
        try {
            await api.delete(`/users/techs/${tech.id}`, {
                headers: {
                    Authorization: `bearer ${token}`
                }
            })
            const techsUpdate = techs.filter(element => tech.id !== element.id)
            setTechs(techsUpdate)
            toast.info("Tecnologia excluida com sucesso!")
        } catch (error) {
            console.log(error)
        }
    }

    const remove = async (e) => {
        e.preventDefault()
        await removeTech()
        closeEditModal()
    }

    return (
        <TechContext.Provider value={{ techs, setTechs, editModalIsOpen, setEditModalIsOpen, openEditModal, closeEditModal, createModalIsOpen, setCreateModalIsOpen, openCreateModal, closeCreateModal, editTech, addTech, tech, setTech, submit, remove }}>
            {children}
        </TechContext.Provider>
    )
}