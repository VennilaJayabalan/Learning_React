import React, { useState } from "react";


const AccountCrationScreen = () => {

    const [accountForm, updateaccountForm] = useState({
        nameField: "",
        emailField: "",
        passwordField: "",
        DOBField: "",
        genderField: "",
        hobbiesField: [],
        educationField: "",
        addressField: ""
    });


    const getInputValue = (event) => {

        if (event.target.id === "hobbiesField") {
            if(event.target.checked){
                accountForm.hobbiesField.push(event.target.value);
            }
            else{
                const index = accountForm.hobbiesField.indexOf(event.target.value);
                accountForm.hobbiesField.splice(index, 1);
            }
            
        }
        else {
            updateaccountForm({ ...accountForm, [event.target.id]: event.target.value })
        }
    }

    const submitAccountForm = () => {
        console.log(accountForm);
    }


    return (
        <div>
            <h2>Create a New Account</h2>
            <div>
                <label>Enter your Name : </label>
                <input id="nameField" type="text" placeholder="Enter you Name" onChange={getInputValue} />
            </div>
            <div>
                <label>Enter your Email ID : </label>
                <input id="emailField" type="text" placeholder="Enter you Email ID" onChange={getInputValue} />
            </div>
            <div>
                <label>Enter your Password : </label>
                <input id="passwordField" type="password" placeholder="Enter you Password" onChange={getInputValue} />
            </div>
            <div>
                <label>Enter your DOB : </label>
                <input id="DOBField" type="date" onChange={getInputValue} />
            </div>
            <div>
                <label>Enter your Gender : </label>
                <input id="genderField" type="radio" name="Gender" onChange={getInputValue} value="Male" />Male
                <input id="genderField" type="radio" name="Gender" onChange={getInputValue} value="Female" />Female
                <input id="genderField" type="radio" name="Gender" onChange={getInputValue} value="Others" />Others
            </div>
            <div>
                <label>Enter your Hobbies : </label>
                <input id="hobbiesField" type="checkbox" onChange={getInputValue} value="Hockey" />Hockey
                <input id="hobbiesField" type="checkbox" onChange={getInputValue} value="Cricket" />Cricket
                <input id="hobbiesField" type="checkbox" onChange={getInputValue} value="Football" />Football
                <input id="hobbiesField" type="checkbox" onChange={getInputValue} value="Badmittan" />Badmittan
                <input id="hobbiesField" type="checkbox" onChange={getInputValue} value="Chess" />Chess
                <input id="hobbiesField" type="checkbox" onChange={getInputValue} value="Painting" />Painting
            </div>
            <div>
                <label>Select your Qualification : </label>
                <select id="educationField" onChange={getInputValue}>
                    <option>Bachelor of Engineering</option>
                    <option>Bachelor of Accounts</option>
                    <option>Bachelor of Arts</option>
                    <option>Master in Arts</option>
                </select>
            </div>
            <div>
                <label>Enter your Address : </label>
                <textarea id="addressField" placeholder="Enter your Address" onChange={getInputValue}></textarea>
            </div>
            <div>
                <button onClick={() => submitAccountForm()}>Submit</button>
            </div>
        </div>
    )
}
export default AccountCrationScreen;