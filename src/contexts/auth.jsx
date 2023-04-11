import React, {createContext} from "react";

// Criando o contexto de autenticação em uma area protegida
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    return (
        <AuthContext.Provider value={{isAuthenticated: true}}>
            {props.children}
        </AuthContext.Provider>
    );

}