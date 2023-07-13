import { useContext, useState } from "react";
import jwt from "jwt-decode";
import axios from "axios";
import { MyContext } from "../App";

const InputTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDes] = useState("");
  const user = jwt(localStorage.getItem("token"));
    const {count,setCount}=useContext(MyContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const body = { title, description };
    axios.post(`http://localhost:5000/tasks?user=${user.id}`, body).then(res => {
            setCount(!count);
            setTitle("");
            setDes("");
        }).catch(e=>{
             alert(e.message);
        })
    console.log(body);
  };
  return (
    <div>
        <hr/>
      <h4 className="text-left mt-5">Add New Task:</h4>
      <form className="d-flex mt-5" onSubmit={onSubmit}>
        <label>Title:</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Description:</label>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDes(e.target.value)}
          required
        />
        <button className="btn btn-success">Add</button>
      </form>
      <hr/>
    </div>
  );
};

export default InputTask;
