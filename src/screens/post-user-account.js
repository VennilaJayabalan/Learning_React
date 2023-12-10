import React, {useState} from "react";
import axios from "axios";

const PostUserAccountScreen = () => {

    const [postUserForm, updatePostUserForm] = useState({
        email : "",
        password : ""
    })

    const getValueFromInput = (event) => {
        updatePostUserForm({...postUserForm, [event.target.id] : event.target.value});

    }
    const submitPostUserForm = () => {
        // console.log(postUserForm);
        const url = "https://reqres.in/api/register";

        axios.post(url, postUserForm)
        .then((Response) => {
            console.log(Response);
            alert("Success- User Register");
        })
        .catch((error) => {
            console.error(error);
            alert("Failed, Please contact admin");

        })
    }
    return(
        <div>
            <h2>Post User Account</h2>
            <div>
                <label>Enter your Email : </label>
                <input id="email" type="text" placeholder="Enter Email" onChange={getValueFromInput}/>
            </div>
            <div>
                <label>Enter your password : </label>
                <input id="password" type="password" placeholder="Enter Password" onChange={getValueFromInput}/>
            </div>
            <div>
                <button onClick={() => submitPostUserForm()}>Register</button>
            </div>
        </div>
    )

}
export default PostUserAccountScreen;