import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContextProvider, AuthContext } from './contexts/auth';
import LoginPage from './pages/Login/LoginPage';
import AddUser from './pages/Login/AddUser';
import PharmacyPage from './pages/Pharmacy/Pharmacy';
import { PharmaList } from './pages/Pharmacy/PharmaList';
import MedicationPage from './pages/Medication/Medication';
{/*import { MedicationList } from './pages/Medication/MedicationList';*/}
import RegisterPage from './pages/Register/Register';
import AddPharmacy from './pages/Pharmacy/AddPharmacy';
import AddMedicationPage from './pages/Medication/AddMedication';


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
                    <Route exact path="/adduser" element={<AddUser />} />
                    <Route exact path="/pharmacy" element={<Private><PharmacyPage /></Private>} />
                    <Route exact path="/pharmalist" element={<Private><PharmaList /></Private>} />
                    <Route exact path="/medication" element={<Private><MedicationPage /></Private>} />
                    <Route exact path="/register" element={<Private><RegisterPage /></Private>} />                   
                    <Route exact path="/addmedication" element={<AddMedicationPage />} />
                    <Route exat path="/addstore" element={<AddPharmacy />} />
                    
                    
                    
                </Routes>
            </AuthContextProvider>
        </Router>
    );
};

export default AppRouter;