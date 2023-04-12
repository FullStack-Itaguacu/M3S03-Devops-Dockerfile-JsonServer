import React, {useState, useEffect, createContext} from "react";
import { useNavigate } from "react-router-dom";

// Criando o contexto de autenticação em uma area <protegida>
export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true); // para carregar a pagina
    
    useEffect(() => {
        const recoveredUser = localStorage.getItem("user"); // pega o usuario do localstorage
        
        if(recoveredUser) { // se existir um usuario no localstorage
            setUser(JSON.parse(recoveredUser)); // converte o usuario para JSON
        }
        setLoading(false); // ajuda no carregar a pagina
    }, []);

    const login = (email, password) => {
        
        console.log("login auth", {email, password});

        // api criar uma sessão  sem precisar de um servidor backend, até o momento
        // esta retorna um usuario com id e email
        const loggerUser = {
            id:"123",
            email, 
        }

        localStorage.setItem("user", JSON.stringify(loggerUser)); // salva o usuario no localstorage

        // Simulando uma autenticação
        if(password === "123456789"){
            setUser(loggerUser);//com o usuario logado
            navigate("/"); // redireciona para a pagina inicial
            } else {
            alert("Email ou Senha incorreta");
        };
    };
        
        
   const logout = () => {
        console.log("logout");
        localStorage.removeItem("user"); // remove o usuario do localstorage
        setUser(null); // remove o usuario do estado
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