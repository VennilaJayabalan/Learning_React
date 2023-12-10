import React, { useState } from "react";


import "../css/user-login.css";

const UserScreen = () => {

    const [loginForm, updateloginForm] = useState({
        emailField: "",
        passwordField: ""
    })

    const getInputValue = (event) => {
        updateloginForm({ ...loginForm, [event.target.id]: event.target.value })

    }

    const submitLogin = () => {
        console.log(loginForm);
    }
    return (

        <div>
            <div>
                <h1>User Account login</h1>
            </div>
            <div className="space">
                <label className="label-width">Enter the Email ID : </label>
                <input id="emailField" type="Text" placeholder="Enter your Email ID" onChange={getInputValue} />
            </div>
            <div className="space">
                <label className="label-width">Enter the Password : </label>
                <input id="passwordField" type="password" placeholder="Enter your Password" onChange={getInputValue} />
            </div>
            <div className="space">
                <button onClick={() => submitLogin()}>Login</button>
            </div>

        </div>
    )
}
export default UserScreen;