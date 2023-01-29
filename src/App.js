import {Routes,Route} from "react-router-dom"
import Main from "./Componets/main"
import Loggin from "./Componets/loggin"
import Register from "./Componets/register"
const App = () => {
  return (
    <Routes>
         <Route path="/" element={<Main/>}/>
         <Route path="/Loggin" element={<Loggin/>}/>
         <Route path="/Register" element={<Register/>}/>
    </Routes>
    )
}

export default App
