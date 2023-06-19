import { RoutesMain } from "./RoutesMain/index.jsx"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from "./styles/GlobalStyles.js";

function App() {

  return (
    <>
      <GlobalStyles />
      <RoutesMain />
      <ToastContainer autoClose={1000} />
    </>
  )
}

export default App
