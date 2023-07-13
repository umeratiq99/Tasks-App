import axios from "axios";
import { useContext, useEffect, useState } from "react";
import jwt from "jwt-decode";
import EditTask from "./EditTask";
import { Navigate, useNavigate } from "react-router-dom";
import { MyContext } from "../App";
import Table from "react-bootstrap/Table";

const Listtask = () => {
  const { count, setCount } = useContext(MyContext);

  const user = jwt(localStorage.getItem("token"));
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/tasks?user=${user.id}`)
      .then((res) => {
        setTasks(res.data);

      })
      .catch((e) => {
        alert(e.message);
      });
  }, [count]);

  const getColor = (taskStatus) => {
    if (taskStatus === "pending") {
      return "red";
    }
    if (taskStatus === "complete") {
      return "green";
    }
  };

  const handleStatus=(task) => {
    const body = {
        "status": "complete"
    }
    axios.put(`http://localhost:5000/tasks/updateTask?id=${task.id}&user=${user.id}`, body).then(res => {
        setCount(!count)
    }).catch((e) => {
        alert(e.message);
    })
    }
  const handleUpdateTask = (task, update) => {
    axios
      .put(
        `http://localhost:5000/tasks/updateTask?id=${task.id}&user=${user.id}`,
        update
      )
      .then((res) => {
        setCount(!count);
      }).catch((e) => {
        alert(e.message);
    });
  };
  const handleDelete=(task)=>{
    axios.delete(`http://localhost:5000/tasks?user=${user.id}&id=${task.id}`).then(res => {
        alert("Deleted");
        setCount(!count)
    }).catch((e) => {
        alert(e.message);
    })
  }
  const [showForm, setShowForm] = useState(false);
  const [updateTask, setUpdateTask] = useState({});
  return tasks ? (
    <>
      <h4 className="text-left mt-5">Tasks:</h4>
      <Table striped>
        <thead>
          <tr>
            <th>| Title</th>
            <th>| Description</th>
            <th>| Status</th>
            <th style={{alignItems: "justify"}} colSpan={3}>| Actions</th>
            <th>| Filter</th>
            <th>| Sort</th>
          </tr>
        </thead>
        <tbody>
          {tasks && tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td style={{ color: getColor(task.status) }}>{task.status}</td>
              <td>{task.status === "pending" ? <button className="btn btn-success" onClick={()=>handleStatus(task)}>Mark as Completed</button> : <></>}</td>
              <td>{task.status === "pending" ? <EditTask task={task} handleUpdateTask={()=>handleUpdateTask}/> : <></>}</td>
              <td><button class="btn btn-danger" onClick={()=>handleDelete(task)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  ) : (
    <></>
  );
};

export default Listtask;
