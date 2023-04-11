import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContextProvider, AuthContext } from './contexts/auth';
import LoginPage from './pages/Login/LoginPage';
import HomePage from './pages/Home/HomePage';

const AppRouter = () => {
    const Private = ({children}) => {
        const {authenticated, loading} = useContext(AuthContext);
            if (loading) {
                return <div className='loading'>Carregando...</div>;
            }

            if (!authenticated) {
                return <Navigate to="/login" />;
            } else {
                return children;
            }
        };

    return (
        <Router>
            <AuthContextProvider>        
            <Routes>
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/" element={<Private><HomePage /></Private>} /> 
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            </AuthContextProvider>
        </Router>
    );
};

export default AppRouter;