import React from "react";
import "./login.css";
import logo from "./assets/MicrosoftTeams-image.png";

const Login = () => {
  return (
    <div className="area">
      <div className="login">
        <div>
          <img src={logo} />
        </div>

        <div className="title">
          <h1>Faça login</h1>
        </div>

        <form>
          <input
            type="email"
            autofocus
            name="email"
            required
            class="form-control"
            placeholder="Seu E-mail"
            tabindex="1"
          />
          <input
            type="password"
            required
            class="form-control"
            placeholder="Senha"
            tabindex="2"
          />
          <button type="submit">Login</button>
          <p>
            <a href="#">Esqueceu sua senha?</a>
          </p>
        </form>
      </div>
    </div>
    /*<div className="login">
      <div className="login-logo">
        <img src="" alt="MicrosoftTeams-image.img" />
      </div>

      <div className="login-center">
        <h1>Faça login</h1>

        <div className="login-loginInputEmail">
          <input type="email" placeholder="E-mail" />
        </div>

        <div className="login-loginInputPassword">
          <input type="password" placeholder="Senha" />
        </div>

        <input type="checkbox" id="CheckBoxLembrarDeMim" />

        <label htmlFor="check"> Lembrar de mim</label>

        <br />

        <button type="submit" id="button">
          Login
        </button>
      </div>
  </div>*/
  );
};

export default Login;
