import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import { Date } from "react-bootstrap";

function DetailsModal(props) {
  const movie = props.movie;
  const genre = props.genre;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Show Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="card p-2 m-4 col-lg-8 col-sm-12">
          <img src={movie.poster} />
          {movie.overview}
          {genre}

          <p> Release Date: {movie.release_date} </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DetailsModal;
