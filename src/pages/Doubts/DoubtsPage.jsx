import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Doubts } from "../../components/Doubts/DoubtsCard";


const DoubtsPage = () => {
    const history = useNavigate();

    function handleGoBack() {
        history(-1);
    }

    return (
        <>
            <Doubts />
            <input 
                type="button"
                className="btn btn-outline-info me-md-1" 
                value="Voltar" 
                onClick={handleGoBack} 
            />
        </>
    );
}

export default DoubtsPage;