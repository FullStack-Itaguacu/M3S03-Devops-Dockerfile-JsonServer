import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContextProvider, AuthContext } from './contexts/auth';
import LoginPage from './pages/Login/LoginPage';
import AddUserPage from './pages/User/AddUser';
import PharmacyPage from './pages/Pharmacy/Pharmacy';
import PharmaList from './pages/Pharmacy/PharmaList';
import Map from './pages/PharmacyMap/PharmacyMap';
import MedicationPage from './pages/Medication/Medication';
import RegisterPage from './pages/Register/Register';
import AddPharmacy from './pages/Pharmacy/AddPharmacy';
import AddMedicationPage from './pages/Medication/AddMedication';
import DoubtsPage from './pages/Doubts/DoubtsPage';



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
                    <Route exact path="/" element={<LoginPage />} />
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/adduser" element={<AddUserPage />} />
                    <Route exact path="/pharmacy" element={<Private><PharmacyPage /></Private>} />
                    <Route exact path="/pharmalist" element={<Private><PharmaList /></Private>} />
                    <Route exact path="/pharmamap" element={<Private><Map /></Private>} />
                    <Route exact path="/medication" element={<Private><MedicationPage /></Private>} />
                    <Route exact path="/register" element={<Private><RegisterPage /></Private>} />                   
                    <Route exact path="/addmedication" element={<AddMedicationPage />} />
                    <Route exat path="/addstore" element={<AddPharmacy />} />
                    <Route exact path="/faq" element={<DoubtsPage />} />
                    {/*<Route exact path="/pharmamap" element={<PharmaMap />} />*/}                    
                </Routes>
            </AuthContextProvider>
        </Router>
    );
};

export default AppRouter;