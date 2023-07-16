import axios from "axios";
import { useContext, useEffect, useState } from "react";
import EditTask from "./EditTask";
import InputTask from "./InputTasks";
import { MyContext } from "../App";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

const Listtask = () => {
  // Global States
  const { count, setCount } = useContext(MyContext);
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("");
  const [order, setOrder] = useState("");
  const [orderby, setOrderby] = useState("");

  // API call for geting tasks of the user
  useEffect(() => {
    let apiUrl = `http://localhost:5000/tasks?`;
    if (status) {
      apiUrl = apiUrl + "status=" + status + "&";
    }
    if (order && orderby) {
      apiUrl = apiUrl + "orderby=" + orderby + "&order=" + order;
    }
    axios
      .get(apiUrl)
      .then((res) => {
        setTasks(res.data);
      })
      .catch((e) => {
        alert(e.message);
      });
  }, [count, status, order, orderby]);

  // function to set color for status
  const getColor = (taskStatus) => {
    if (taskStatus === "pending") {
      return "red";
    }
    if (taskStatus === "complete") {
      return "green";
    }
  };

  // API call for updating status 
  const handleStatus = (task) => {
    const body = {
      status: "complete",
    };
    axios
      .patch(`http://localhost:5000/tasks/updateTask?id=${task.id}`, body)
      .then((res) => {
        setCount(!count);
      })
      .catch((e) => {
        console.log(e)
        alert(e);
      });
  };

  // API call for updating the task
  const handleUpdateTask = (task, update) => {
    axios
      .patch(`http://localhost:5000/tasks/updateTask?id=${task.id}`, update)
      .then((res) => {
        setCount(!count);
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  // API call for deleting a task
  const handleDelete = (task) => {
    axios
      .delete(`http://localhost:5000/tasks?id=${task.id}`)
      .then((res) => {
        alert("Deleted");
        setCount(!count);
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  // Function to set filtering and sorting options
  const handleFilterSort = (value, setFunction) => {
    setFunction(value);
  };

  return tasks ? (
    <>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h2>Task Manager</h2>
        <InputTask />
      </div>
      <hr />
      <h4 className="text-left mt-5">Tasks:</h4>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Table style={{ width: "400px" }}>
          <thead>
            <tr>
              <th>
                <Form.Label>
                  <h6>Filter:</h6>
                </Form.Label>
              </th>
              <th colSpan={2}>
                <Form.Label>
                  <h6>Sort:</h6>
                </Form.Label>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Select
                  onChange={(e) => handleFilterSort(e.target.value, setStatus)}
                  aria-label="Default select example"
                  style={{ width: "150px" }}
                >
                  <option value="">All</option>
                  <option value="complete">Completed</option>
                  <option value="pending">Pending</option>
                </Form.Select>
              </td>
              <td>
                <Form.Select
                  placeholder="Select"
                  onChange={(e) => handleFilterSort(e.target.value, setOrderby)}
                  aria-label="Default select example"
                  style={{ width: "150px" }}
                >
                  <option value="">Select</option>
                  <option value="createdAt">Date</option>
                  <option value="status">Status</option>
                </Form.Select>
              </td>
              <td>
                <Form.Select
                  onChange={(e) => handleFilterSort(e.target.value, setOrder)}
                  aria-label="Default select example"
                  style={{ width: "150px" }}
                >
                  <option value="">Order</option>
                  <option value="ASC">Ascending</option>
                  <option value="DESC">Descending</option>
                </Form.Select>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <Table striped>
        <thead>
          <tr>
            <th>| Title</th>
            <th>| Description</th>
            <th>| Status</th>
            <th style={{ alignItems: "justify" }} colSpan={3}>
              | Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td style={{ color: getColor(task.status) }}>{task.status}</td>
                <td>
                  {task.status === "pending" ? (
                    <button
                      className="btn btn-success"
                      onClick={() => handleStatus(task)}
                    >
                      Mark as Completed
                    </button>
                  ) : (
                    <></>
                  )}
                </td>
                <td>
                  {task.status === "pending" ? (
                    <EditTask task={task} handleUpdateTask={handleUpdateTask} />
                  ) : (
                    <></>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(task)}
                  >
                    Delete
                  </button>
                </td>
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
