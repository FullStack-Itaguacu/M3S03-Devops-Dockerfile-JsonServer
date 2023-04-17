import React, {useState, useContext} from "react";
import { AuthContext } from "../../contexts/auth";
import "./LoginPage.css";

const LoginPage = () => {
    const {authenticated, login} = useContext(AuthContext);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("submit", {email, password});
        login(email, password); //intregração com o meu contexto / consequentemente com a minha api
    };


    return (
        <div id="login">
        <h1 className="titulo">Inicial Login</h1>
        {/*<p>{String(authenticated)}</p>*/}
        <form className="form" onSubmit={handleSubmit}>
        {/*<div className="form-group">
                <label htmlFor="email">Nome</label>
                <input 
                type="text" 
                name="nome" 
                placeholder="Digite seu nome de usuário..." 
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />
    </div>*/}


            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                name="email" 
                placeholder="Digite seu Email..." 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div> 
            <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input 
                type="password" 
                name="password" 
                placeholder="Digite sua senha ..." 
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <p className="p-form">Senha com no mínimo 8 caracteres e números</p> 
            <p className="p-form">
                <a href="#">Esqueceu sua senha?</a>
            </p>
            <div className="btn-form-group">
                <button type="submit" className="btn-form-group">Entrar</button>
            </div>
            <p className="p-form">
                <a href="/adduser">Não tem conta? crie agora..</a>
            </p>
        </form>      
        </div>
    );
}

export default LoginPage;