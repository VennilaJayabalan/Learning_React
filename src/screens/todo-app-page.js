import React, {useState} from "react";
import { NavLink } from "react-router-dom";

const TodoScreen = () => {

    const [todoText, updateTodoText] = useState("");
    const [arrayText, updateArrayText] = useState ([]);

    const displayMessage = () => {
        // alert(todoText);
        // arrayText.push(todoText);
        // updateArrayText(arrayText);

        updateArrayText ([...arrayText, todoText]);

    }

    const todoList = arrayText.map((value, index) => {
        return(
          <h3 key={index}>{value}</h3>
        )
      })

    const getValueFromInput = (event) => {
        updateTodoText(event.target.value);
    }
    return (
        <div>
            <h2>Todo App</h2>
            <NavLink to="/login">Go to login page</NavLink>
            <div>
                <label>Enter the Todo Message</label>
                <input type="todoText" placeholder="Enter your Message"onChange={getValueFromInput}/>
                <button onClick={() => displayMessage()}>Add</button>
                {todoList}
            </div>
           
           
        </div>
    )
}

export default TodoScreen;