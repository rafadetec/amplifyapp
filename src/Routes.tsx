import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Main from "./Screens/Main/Index";
import Home from "./Screens/Home/index";
import Login from "./Screens/Login/index";
import Cadastro from "./Screens/Cadastro/index";
import Sobre from "./Screens/Sobre/index";
import Contatos from "./Screens/Contatos/index";

function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/Sobre" element={<Sobre />} />
                <Route path="/Contatos" element={<Contatos />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;