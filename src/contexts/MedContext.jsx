import { useEffect, useState, createContext, useContext } from "react";

export const MedicationContext = createContext();

export const useMedication = () => {
    const medication = useContext(MedicationContext);
    return medication;
};

export const MedicationProvider = ({ children }) => {
    const [medications, setMedications] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5000/medications")
        .then((res) => { 
            return res.json()
        })
        .then((data) => setMedications(data));
    }, []);

    const addMedication = { medications };
    
    return (
        <MedicationContext.Provider value={{ addMedication }}>
        {children}
        </MedicationContext.Provider>
    );
}