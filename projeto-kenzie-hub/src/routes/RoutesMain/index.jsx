import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../../Pages/LoginPage/index.jsx"
import { RegisterPage } from "../../Pages/RegisterPage/index.jsx"
import { DashboardPage } from "../../Pages/DashboardPage/index.jsx"
import { ProtectedRoutes } from "../ProtectedRoutes/index.jsx"
import { PublicRoutes } from "../PublicRoutes/index.jsx"

export const RoutesMain = () => {

    return (
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<DashboardPage />} />
            </Route>
        </Routes>
    )
}