// component to handle new input for tasks
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { MyContext } from "../App";

const InputTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDes] = useState("");
  const [show, setShow] = useState(false);
  const { count, setCount } = useContext(MyContext);

  // API call on submission of new task
  const onSubmit = (e) => {
    e.preventDefault();
    const body = { title, description };
    axios
      .post(`http://localhost:5000/tasks`, body)
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

  // to handle closing and opening the input modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // returning the JSX modal for input form form
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
