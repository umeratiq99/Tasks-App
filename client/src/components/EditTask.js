import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function EditTask({ task, handleUpdateTask }) {
  const [name, setName] = useState(task.title);
  const [desc, setDesc] = useState(task.description);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateTask(task, { title: name, description: desc });
    setShow(false);
  };

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
          <label htmlFor="">Title:</label>
          <input
            className="form-control"
            type="text"
            placeholder={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="">Description:</label>
          <input
            className="form-control"
            type="text"
            placeholder={desc}
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
