import logo from "../../assets/logo_emerj.png"
import './footer.css';


const footer = () => {
    return(
        <div className="footer">
            <div id="centro"></div>
            <div id="Esquerda">
                <img src={logo} alt = "Logo Emerj" className ="logo" />
                <p>EMERJ-DETEC <br/> Departamento de Tecnologia da EMERJ</p>
            </div>
            <div id="Direta">
                <ul>
                    <li><a href="#Login">Login</a></li>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Sobre">Sobre</a></li>
                    <li><a href="#Contatos">Contatos</a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default footer;