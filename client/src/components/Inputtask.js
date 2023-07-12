import axios from "axios";
import { useEffect, useState } from "react";
import jwt from "jwt-decode"
import Select from 'react-select';
import EditTodo from "./EditTask";
import EditTask from "./EditTask";
import { Navigate, useNavigate } from "react-router-dom";

const Inputtask = () => {

    const [updated, setUpdated] = useState(false);

    const user = jwt(localStorage.getItem('token'));
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/tasks?user=${user.id}`).then(res => {
            setTasks(res.data.reverse());
        }).catch(e => {
            alert(e.message);
        })
    }, [updated])

    const getColor = (taskStatus) => {
        if(taskStatus === "pending"){
            return 'red'
        }
        if(taskStatus === "complete"){
            return 'green'
        }
    }

    const handleUpdateTask = (task, update) => {
        setShowForm(false);
        axios.put(`http://localhost:5000/tasks/updateTask?id=${task.id}&user=${user.id}`, update).then(res => {
            alert("Task updated");
            setUpdated(!updated)
        })
    }

    const [showForm, setShowForm] = useState(false);
    const [updateTask, setUpdateTask] = useState({});
    return tasks ? ( 
        <>
            {showForm && <EditTask task={updateTask} handleUpdateTask={handleUpdateTask}/>}
            {tasks.map((task, index) => 
                <div key={index}>
                    <hr/>
                    <strong>Title: {task.title}</strong>
                    <br />
                    <strong>Description: {task.description}</strong>
                    <br />
                    <strong style={{color : getColor(task.status)}}>Status: {task.status}</strong>
                    <br />
                    {task.status === "pending" ? <button onClick={() => {
                        const body = {
                            "status": "complete"
                        }
                        axios.put(`http://localhost:5000/tasks/updateTask?id=${task.id}&user=${user.id}`, body).then(res => {
                            alert("Task updated");
                            setUpdated(!updated)
                        })
                    }
                    }>Mark as Completed</button> : <></>}
                    <br />
                    <button onClick={() => {
                        setUpdateTask(task);
                        setShowForm(true);
                    }}>Update</button>
                    <br />
                    <button onClick={()=>{
                        axios.delete(`http://localhost:5000/tasks?user=${user.id}&id=${task.id}`).then(res => {
                            alert("Deleted");
                            setUpdated(!updated)
                        })
                    }}>Delete</button>
                </div>
            )}
        </>
        
     ) : <></>
}
 
export default Inputtask;