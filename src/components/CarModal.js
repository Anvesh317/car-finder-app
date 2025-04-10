import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function CarModal({ car, onClose }) {
  return (
    <Modal show={!!car} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{car?.brand}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={car?.image} className="img-fluid mb-2" alt={car?.brand} />
        <p><strong>Fuel:</strong> {car?.fuel}</p>
        <p><strong>Price:</strong> ${car?.price}</p>
        <p><strong>Seats:</strong> {car?.seats}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
