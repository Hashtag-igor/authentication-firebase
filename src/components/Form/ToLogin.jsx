import React, { useState } from "react";

import "./Form.css";
import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../services/FirebaseConfig";


export default function ToLogin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    function handleSignIn(e){
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if(loading){
        return <p>carregando...</p>
    }

    if(user){
        return console.log(user);
    }

    return(
        <div className="form">
            <div className="form-container">
                <div className="desc-form-container">
                    <h1>Faça Login com sua conta</h1>
                        
                    <button className="form-btn">
                        <span className="btn-desc">Entrar com o Facebook</span>
                    </button>

                    <button className="form-btn">
                        <span className="btn-desc">Entrar com o Google</span>
                    </button>
                        
                    <p>OU</p>
                        
                    <form className="form-container">
                        <div className="form-input">
                            <label>Email</label>
                            <input type="email" placeholder="exemplo@hotmail.com" onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="form-input">
                            <label>Password</label>
                            <input type="password" placeholder="************" onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <button className="form-button" onClick={handleSignIn}>
                            <span>Entrar</span>
                        </button>

                        <div className="footer-form">
                            <span>Não tem uma conta?</span>
                            <Link to="/register">Registre-se</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}