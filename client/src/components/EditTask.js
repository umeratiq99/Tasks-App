// Component for editing an existing task
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function EditTask({ task, handleUpdateTask }) {
  // local states for storing updated title and description
  const [name, setName] = useState(task.title);
  const [desc, setDesc] = useState(task.description);
  const [show, setShow] = useState(false);

  // to handle closing and opening the edit modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // handling the for submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateTask(task, { title: name, description: desc });
    setShow(false);
  };
// returning the JSX modal for editing form
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Task:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label >Title:</label>
          <input
            className="form-control"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label >Description:</label>
          <input
            className="form-control"
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
