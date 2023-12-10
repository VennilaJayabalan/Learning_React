import React from "react";
import { NavLink } from "react-router-dom";

const LandingScreen = () => {
    return (
        <div>
            <h1>This is Landing Page</h1>
            <NavLink to="/login">Go to Login page</NavLink>
            <br />
            <NavLink to="/home">Go to Home page</NavLink>
            <br />
            <NavLink to="/contuct">Go to Contuct page</NavLink>
            <br />
            <NavLink to="/todo">Go to Todo App Page</NavLink>
            <br />
            <NavLink to="/user">Click here for User Login Page</NavLink>
            <br />
            <NavLink to="/account">Click here for Account creation Page</NavLink>
            <br />
            <NavLink to="/profile">Click here for Conduct Page</NavLink>
            <br />
            <NavLink to="/userprofile">Click here for User Profile Page</NavLink>
            <br />
            <NavLink to="/getall">Click here for Get All Users Page</NavLink>
            <br></br>
            <NavLink to="/postuser">Click here for Post User Account Page</NavLink>
            <br/>
            <NavLink to="/nodeapi">Click here for Node Get API Page</NavLink>
            <br />
            <NavLink to="/products">Click here for Products Page</NavLink>
            <br/>
            <NavLink to="/crud">Click here for Crud Page</NavLink>
        </div>

            
    )
}
export default LandingScreen;