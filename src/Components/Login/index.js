import React from "react";
//import "./login.css";
import Style from "styled-components";

const Login = () => {
  const Container = Style.div`
    .login {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
        color: red;
      }
      .login-center {
        text-align: center;
        background-color: #f7f7f7;
      }
      .login-center h1 {
        font-family: inherit;
        font-size: 30px;
        font-weight: normal;
      }
      
      /*ÁREA CAMPO EMAIL*/
      .login-loginInputEmail {
        display: flex;
        align-items: center;
        border-radius: 0.25rem;
        margin-top: 10px;
        padding: 3px;
        width: 98%;
        height: 40px;
        background-color: #f7f7f7;
      }
      .login-loginInputEmail input {
        background: transparent;
        width: 100%;
        outline-width: 0;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        font-size: 17px;
        height: 100%;
        background-color: #fff;
      }
      
      
      /*ÁREA CAMPO SENHA*/
      .login-loginInputPassword {
          display: flex;
          align-items: center;
          border-radius: 0.25rem;
          padding: 3px;
          width: 98%;
          height: 40px;
          background-color: #f7f7f7;
        }
        .login-loginInputPassword input {
        background: transparent;
        width: 100%;
        height: 100%;
        margin-bottom: 3px;
        font-size: 17px;
        outline-width: 0;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        background-color: #fff;
        }
      
        /* BOTÃO LOGIN */
        #button {
          display: block;
          margin: auto;
          margin-top: 10px;
          font-family: inherit;
          font-size: 15px;
          width: 100%;
          height: 40px;
        }
    `;
  return (
    <Container>
      <div className="login">
        <div className="login-logo">
          <img src="" alt="" />
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
      </div>
    </Container>
  );
};

export default Login;
