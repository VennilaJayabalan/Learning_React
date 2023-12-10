import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";

import "../css/all-user.css";


const CrudOperationPage = () => {

    useEffect(() => {
        readRecords();
      }, []);

    const [recordlist, updateRecordList] = useState([]);

    const [formSubmited, updateSubmited] = useState(false);

    const [editFormSubmited, updateEditFormSubmited] = useState(false);

    const [formData, updateFormData] = useState ({
        username : "",
        email : "",
        age : "",
        location : ""
    });

    const getValueInput = (event) => {
        updateFormData({...formData, [event.target.id] : event.target.value}); 

    }

    const createProfile = () => {
        updateSubmited(true);
        const url = "http://localhost:5000/api/create/record";

        axios.post(url, formData)
        .then((response) => {
            console.log(response);
            alert("Profile has been created");
            updateFormData({...formData, 
                username : "",
                email : "",
                age : "",
                location : ""
              });
              updateSubmited(false);
              readRecords();
        })
        .catch((error) => {
            console.error(error);
        })
    }

    const readRecords = () => {
        const url = "http://localhost:5000/api/read/record";
        axios.get(url)
        .then((response) => {
            updateRecordList(response.data);
        })
        .catch((error) =>{
            console.error(error);
        })
    }

    const updateRecord = (value) => {
    
      updateFormData({...formData, 
        username : value.username,
        email : value.email,
        age : value.age,
        location : value.location,
        id : value.id
      });
    } 

    const updateProfile = () => {
      const url = "http://localhost:5000/api/update/record/" + formData.id;
      updateEditFormSubmited(true);
  
      axios.put(url, formData)
        .then((response) => {
          console.log(response);
          alert("Update has been completed");
          updateEditFormSubmited(false);
          updateFormData({...formData, 
            username : "",
            email : "",
            age : "",
            location : ""
          });
          readRecords();
        })
        .catch((error) => {
          console.error(error);
        })
    }

    const deleteRecord = (id) => {
      const url = "http://localhost:5000/api/delete/record/" + id;

      axios.delete(url)
      .then((response) => {
        console.log(response);
        alert("Record has been deleted");
        readRecords();
      })
      .catch((error) => {
        console.error(error);

      })
    }

    const recordMap = recordlist.map((value, index) => {
        return(
          <tr key={index}>
            <td>{value.id}</td>
            <td>{value.username}</td>
            <td>{value.email}</td>
            <td>{value.age}</td>
            <td>{value.location}</td>
            <td>
              <button onClick={() => updateRecord(value)}>Update</button>
            </td>
            <td>
            <button onClick={() => deleteRecord(value.id)}>Delete</button>
            </td>
          </tr>
        )
      })

    return (
        <div className="container">
            <h2>Simple Crud Operation using Node JS</h2>
            <div className="space">
                <label className="label">Enter your Username</label>
                <input id="username" value={formData.username} type="text" placeholder="Enter your Username" onChange={getValueInput} />
            </div>
            <div className="space">
                <label className="label">Enter your Email</label>
                <input id="email" value={formData.email} type="text" placeholder="Enter your Email" onChange={getValueInput}/>
            </div>
            <div className="space">
                <label className="label">Enter your Age</label>
                <input id="age" type="number" value={formData.age} placeholder="Enter your Age" onChange={getValueInput}/>
            </div>
            <div className="space">
                <label className="label">Enter your Location</label>
                <input id="location" type="text" value={formData.location} placeholder="Enter your Location"onChange={getValueInput} />
            </div>
            <button onClick={() => createProfile() }>{formSubmited ? "Loading.." : "Create Profile"}</button>
            <button onClick={() => updateProfile() }>{ editFormSubmited? "Inprogress.." : "Update Profile"}</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Age</th>
            <th>Location</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {recordMap}
        </tbody>
      </table>
        </div>

    );
};
export default CrudOperationPage;