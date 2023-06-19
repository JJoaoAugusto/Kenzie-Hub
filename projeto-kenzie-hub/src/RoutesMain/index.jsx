import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../Pages/LoginPage/index.jsx"
import { RegisterPage } from "../Pages/RegisterPage/index.jsx"
import { DashboardPage } from "../Pages/DashboardPage/index.jsx"
import { useState } from "react"


export const RoutesMain = () => {

    const [user, setUser] = useState([])

    return (
        <>
            <Routes>
                <Route path="/" element={<LoginPage setUser={setUser} />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<DashboardPage user={user} />} />
            </Routes>
        </>

    )
}