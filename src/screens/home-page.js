import React from "react";
import {NavLink} from "react-router-dom";

const HomeScreen = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <NavLink to="/contuct">Go to Contuct page</NavLink>
        </div>
    )
}
export default HomeScreen;