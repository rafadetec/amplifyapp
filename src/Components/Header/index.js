import logo from "../../assets/logo_emerj.png"
import './header.css';


const header = () => {
    return(
        <div className="header">
            <div className="bg-gradiente">
                <div className="header-border">
                    <div id="logo">
                        <img src={logo} alt = "Logo Emerj" className ="logo" />
                        <p>EMERJ-DETEC</p>
                    </div>
                    <nav className="header-menu">
                        <ul>
                            <li><a href="#Login">Login</a></li>
                            <li><a href="#Home">Home</a></li>
                            <li><a href="#Sobre">Sobre</a></li>
                            <li><a href="#Contatos">Contatos</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default header;