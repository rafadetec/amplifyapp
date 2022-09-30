import React from "react";
import styled from "styled-components";

const Footer = () => {
    
    const Container = styled.div`
    .footer {
        background-color: #0c344c;
        padding: 5px;
        text-align: center;
        font-size: 10px;
        color: #fefefe;
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
        position: fixed;
        width: 100%;
        bottom: 0;
    }
    .footer a {
        color: #fefefe;
        text-decoration: none;
    }
     .footer p{
        display: flex;
        margin 1%;
     }
    `;

    return (
        <Container>
            <fooder className="footer">
                <div className="container">
                    <div className="content">
                        <p>
                            Escola da Magistratura do Estado do Rio de Janeiro - CNPJ 35.949.858/0001-81.
                        </p>
                        <p>
                            Rua Dom Manuel, nº 25 - Centro - CEP 20010-090 - Telefone: (21) 3133-3369.
                        </p>
                    </div>
                </div>
            </fooder>
        </Container>
    );
}

export default Footer;