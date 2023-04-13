import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContextProvider, AuthContext } from './contexts/auth';
import LoginPage from './pages/Login/LoginPage';
import HomePage from './pages/Home/HomePage';
import PharmaListPage from './pages/PharmacyList/PharmacyList';
import ProductsPage from './pages/Products/Products';

const AppRouter = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);
        if (loading) {
            return <div className="loading">Carregando...</div>;
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
                    <Route exact path="/products" element={<Private><ProductsPage /></Private>} />
                    <Route exact path="/pharmalist" element={<Private><PharmaListPage /></Private>} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </AuthContextProvider>
        </Router>
    );
};

export default AppRouter;