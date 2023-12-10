import React from "react";
import {NavLink} from "react-router-dom";

const ContuctScreen = () => {
    return(
        <div>
            <h1>Contuct Page</h1>
            <NavLink to="/login">Go to login page</NavLink>
            <br/>
            <NavLink to="/home">Go to home page</NavLink>
            

        </div>
    )
}
export default ContuctScreen;