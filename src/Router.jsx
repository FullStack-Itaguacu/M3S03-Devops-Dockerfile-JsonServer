import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './contexts/auth';
import LoginPage from './pages/Login/LoginPage';
import HomePage from './pages/Home/HomePage';

const AppRouter = () => {
    const [user, setUser] = useState(null); 
    const login = (email, password) => {
        console.log(login, {email, password});
        setUser({email, password});
    };
    const logout = () => {
        console.log(logout)
    };

    // A autenticação é um Boolean (user == null ? false : true)
    // !! converte o valor para Boolean    
    return (
        <Router>
            <AuthContext.Provider value={{authenticated: !!user, user, login, logout}}>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            </AuthContext.Provider>
        </Router>
    );
}

export default AppRouter;