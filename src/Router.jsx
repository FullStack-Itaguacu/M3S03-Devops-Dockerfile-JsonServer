import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContextProvider, AuthContext } from './contexts/auth';
import LoginPage from './pages/Login/LoginPage';
import PharmacyPage from './pages/Pharmacy/Pharmacy';
import ProductsPage from './pages/Products/Products';
import AddMedicationPage from './pages/Medication/AddMedication';
import { PharmaList } from '../src/components/Pharma/PharmaList';
import AddUser from './pages/Login/AddUser';

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
                    <Route exact path="/pharmacy" element={<Private><PharmacyPage /></Private>} />
                    <Route exact path="/pharmalist" element={<Private><PharmaList /></Private>} />
                    <Route exact path="/products" element={<Private><ProductsPage /></Private>} />                    
                    <Route exact path="/add" element={<Private><AddMedicationPage /></Private>} />
                    <Route exact path="/adduser" element={<AddUser />} />
                </Routes>
            </AuthContextProvider>
        </Router>
    );
};

export default AppRouter;