import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ConductPageScreen = () => {

    const [conductForm, updateconductForm] = useState({
        nameField: "",
        phoneNumberField: "",
        messageField: ""
    })

    const getInputValue = (event) => {
        updateconductForm({...conductForm,  [event.target.id] : event.target.value})

    }
    const submitConductForm = () => {
        console.log(conductForm);
    }

    return (
        <div>
            <h2>My Profile Page</h2>
            <div>
                <label>Enter your Name : </label>
                <input id="nameField" type="text" placeholder="Enter your Name" onChange={getInputValue} />
            </div>
            <div>
                <label>Enter your Phone Number :</label>
                <input id="phoneNumberField" type="number" placeholder="Enter your Phone Number" onChange={getInputValue} />

            </div>
            <div>
                <label>Enter your message : </label>
                <textarea id="messageField" placeholder="Enter your message" onChange={getInputValue}> </textarea>
            </div>

            <div>
                <button onClick={() => submitConductForm()}>Submit</button>
            </div>

        </div>




    )
}
export default ConductPageScreen;
