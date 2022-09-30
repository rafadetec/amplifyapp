import logo from '../../logo_emerj.png';
import "./App.css";

function Main() {
  return (
    <div className="App">
        <header className="App-header">
          <section className="App-moldura">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>EMERJ-DETEC</h1>
            <p>Departamento de Tecnologia da EMERJ</p>
            <a className="App-link" href="/Home"  rel="noopener noreferrer">| Entrar |</a><br/><br/>
            <a className="App-link" href="/Login"  rel="noopener noreferrer">| Login |</a>
          </section>
        </header>
        
      </div>
  );
}

export default Main;