import React, { useState } from "react";

function ToDoList(){
    const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk a dog"]);
    const [newTask, setNewtask] = useState("");

    function handleInputChange(event){
        setNewtask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask])
            setNewtask("")
        }
    }

    function deleteTask(index){
        const updateTask = tasks.filter((_, i) => i !== index)
        setTasks(updateTask)
    }

    function moveTaskUp(index){
        if(index > 0){
            const updateTask = [...tasks];
            [updateTask[index], updateTask[index-1]] = [updateTask[index-1], updateTask[index]]
            setTasks(updateTask)
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updateTask = [...tasks];
            [updateTask[index], updateTask[index+1]] = [updateTask[index+1], updateTask[index]]
            setTasks(updateTask)
        }
    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task,index) => <li key={index}><span className="text">{task}</span>
                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                <button className="move-button" onClick={() => moveTaskUp(index)}>👆</button>
                <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
                
                </li>)}
            </ol>
        </div>
    );
}

export default ToDoList