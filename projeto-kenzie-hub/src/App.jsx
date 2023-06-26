import { RoutesMain } from "./routes/RoutesMain/index.jsx"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from "./styles/GlobalStyles.js";
import { UserContext } from "./providers/UserContext.jsx";
import { useContext } from "react";

function App() {
  const { loading } = useContext(UserContext)
  return (
    <>
      <GlobalStyles />
      {loading ? <p>Carregando...</p> : <RoutesMain />}
      <ToastContainer autoClose={1000} />
    </>
  )
}
export default App
