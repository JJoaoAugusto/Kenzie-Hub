import { Header } from "./Header/index.jsx"
import { TechProvider } from "../../providers/TechContext.jsx"
import { TechSection } from "./TechSection/index.jsx"

export const DashboardPage = () => {

    return (
        <TechProvider>
            <Header />
            <TechSection />
        </TechProvider>
    )
}
