import React, { useState } from "react";

import "./Form.css";
import { Link } from "react-router-dom";
import { auth } from "../../services/FirebaseConfig";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

export default function ToRegister(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
      createUserWithEmailAndPassword, //Vai receber os parametros de Email e Senha
      user, //Recebe os dados do Usuário
      loading, //Enquanto a função estiver carregando ele vai dar um loading pronto pra gente
      error, //Parte de erro
    ] = useCreateUserWithEmailAndPassword(auth);

    function handleSignOut(e){
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }

    if(loading){
        return <p>carregando...</p>
    }

    return(
        <div className="form">
            <div className="form-container">
                <div className="desc-form-container">
                    <h1>Crie sua conta</h1>
                        
                    <button className="form-btn">
                        <span className="btn-desc">Entrar com o Facebook</span>
                    </button>

                    <button className="form-btn">
                        <span className="btn-desc">Entrar com o Google</span>
                    </button>
                        
                    <p>OU</p>
                        
                    <form className="form-container">
                        <div className="form-input">
                            <label>Name</label>
                            <input type="text" placeholder="Digite o seu Nome" />
                        </div>

                        <div className="form-input">
                            <label>Email</label>
                            <input type="email" placeholder="exemplo@hotmail.com" onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="form-input">
                            <label>Password</label>
                            <input type="password" placeholder="************" onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <button className="form-button" onClick={handleSignOut}>
                            <span>Entrar</span>
                        </button>

                        <div className="footer-form">
                            <span>Já tem uma conta?</span>
                            <Link to="/login">Entre com sua conta</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}