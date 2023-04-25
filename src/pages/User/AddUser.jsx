import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AddUserCard  from "../../components/User/AddUserCard";


const AddUserPage = () => {

    const history = useNavigate();

    function handleGoBack() {
        history(-1);
    }

    return (
        <>
            <AddUserCard />
            <div>
                <input
                    type="button" 
                    className="btn btn-danger mx-3 my-2" 
                    value="Voltar" 
                    onClick={handleGoBack} />
            </div>
        </>
    );
}

export default AddUserPage;