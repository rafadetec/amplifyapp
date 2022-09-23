import React from 'react';
import logo from './logo_emerj.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <section className="App-moldura">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>EMERJ-DETEC</h1>
            <p>Departamento de Tecnologia da EMERJ</p>
            <a className="App-link" href="#https://reactjs.org"  rel="noopener noreferrer">| Entrar |</a><br/><br/>
            <a className="App-link" href="#https://reactjs.org"  rel="noopener noreferrer" >| Login |</a>
          </section>
        </header>
    </div>
  );
}

export default App;
