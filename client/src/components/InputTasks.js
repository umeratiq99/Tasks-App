import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import jwt from "jwt-decode";
import axios from "axios";
import { MyContext } from "../App";

const InputTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDes] = useState("");
  const [show, setShow] = useState(false);
  const user = jwt(localStorage.getItem("token"));
  const { count, setCount } = useContext(MyContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const body = { title, description };
    axios
      .post(`http://localhost:5000/tasks?user=${user.id}`, body)
      .then((res) => {
        setCount(!count);
        setShow(false);
        setTitle("");
        setDes("");
      })
      .catch((e) => {
        alert(e.message);
      });
    console.log(body);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Task
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Task:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="">Title:</label>
          <input
            className="form-control"
            type="text"
            placeholder={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="">Description:</label>
          <input
            className="form-control"
            type="text"
            placeholder={description}
            onChange={(e) => setDes(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InputTask;
