import React,{useState} from "react";
import { NavLink } from "react-router-dom";

import "../css/login.css";

const LoginScreen = () => {

    const [text, updateText] = useState("");

    let message ="Good Morning";
    let greeting ="Hello Welcome";

    const displayMessage = () => {
        alert (greeting);
        alert (text);
    }
    const getValueFromInput = (event) => {
        // console.log("Im working");
        console.log(event.target.value);
        updateText(event.target.value);
      }

    return (
        <div>
            <h1 className="heading">Login Page </h1>
            <NavLink to="/home">Go to Home Screen</NavLink>
            <br/>
            <NavLink to="/">Go to Landing page</NavLink>
            <br/>
            <NavLink to="/user">Go to User page</NavLink>
            <div>
                <label>Enter your message</label>
                <input type="text" placeholder="Enter your Message" onChange={getValueFromInput}/>
            </div>
            <h2>{message}</h2>
            <h2>{greeting}</h2>
            <h1>{text}</h1>
            <button onClick={() => displayMessage()}>Geeting Message</button>
            

        </div>
    )
}
export default LoginScreen;