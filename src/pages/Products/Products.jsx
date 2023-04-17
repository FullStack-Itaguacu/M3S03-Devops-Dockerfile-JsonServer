import React, {useContext} from "react";
import { AuthContext } from "../../contexts/auth";

const ProductsPage = () => {
    //recuperar o callback do logout do contexto
    const { authenticated, logout} = useContext(AuthContext);
    
    // chamo o logout na função abaixo
    const handleLogout = () => {
        logout();
    };

    return (
        <>
            <h1>Medicamentos</h1>
            <p>{String(authenticated)}</p>
            {/*<ProductGrid />*/}
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}

export default ProductsPage;