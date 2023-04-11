import React, {useState, useEffect, createContext} from "react";
import { useNavigate } from "react-router-dom";
import {api, createSession} from "../services/api";

// Criando o contexto de autenticação em uma area <protegida>
export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true); // para carregar a pagina

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");
        if(recoveredUser){
            setUser(JSON.parse(recoveredUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        // api criar uma session, retorna um usuario
        const response = await createSession({email, password});
        console.log("login", response.data);

        //api criar uma session, retorna um usuario
        //const loggerUser = {
        //    id: "123",
        //    email,
        //};
        const loggerUser = response.data.user;
        const token = response.data.token;

        // Salva o usuario no localstorage
        localStorage.setItem("user", JSON.stringify(loggerUser));
        // Salva o token no localstorage
        localStorage.setItem("token", token);

        // API sempre envia um Beader token quando é solicitado uma requisição
        api.defaults.headers.Authorization = `Bearer ${token}`;

        

        // Simulando uma autenticação
        //if(password === "123456789"){
        setUser(loggerUser);//com o usuario logado
        navigate("/"); // redireciona para a pagina inicial
        //}

    };
    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user"); // remove o usuario do localstorage
        localStorage.removeItem("token"); // remove o token do localstorage
        api.defaults.headers.Authorization = null; // remove o token do header
        //setUser(null); // remove o usuario do estado
        navigate("/login");// redireciona para a pagina de login
    };

    // A autenticação é um Boolean (user == null ? false : true)
    // !! converte o valor para Boolean   
    return (
        <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>
        {children}
        </AuthContext.Provider>
    );

}