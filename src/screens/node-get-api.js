import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NodeGetApiScreen = () => {

    const [students, updateStudents] = useState([]);

    const [createForm, updateCreateForm] = useState({
        name: ""
    });

    const loadUser = () => {
        const url = "http://localhost:5000/api/user/list";

        axios.get(url)
            .then((response) => {
                updateStudents(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    const studentMap = students.map((value, index) => {
        return (
            <tr key={index}>
                <td>{value.name}</td>
            </tr>
        )
    })

    const getInputValue = (event) => {
        updateCreateForm({ ...createForm, [event.target.id]: event.target.value })
    }

    const createUserAccount = () => {
        const url = "http://localhost:5000/api/user/create";

        axios.post(url, createForm)
            .then((response) => {
                alert(response.data);
                updateCreateForm({ ...createForm, name: "" });
            })
            .catch((error) => {
                console.error(error);
            })
    }

    return (
        <div>
            <h2>Node Get API</h2>
            <div>
                <label>Enter your Name</label>
                <input id="name" value={createForm.name} type="text" placeholder="Enter your Name" onChange={getInputValue} />
            </div>
            <div>
                <button onClick={() => createUserAccount()}>Create User</button>
            </div>
            <button onClick={() => loadUser()}>Load Users</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {studentMap}
                </tbody>
            </table>
        </div>
    )

}
export default NodeGetApiScreen;