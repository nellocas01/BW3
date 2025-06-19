import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const ModalHomeVideo = ({ showVideo, handleCloseHomeVideo }) => {
  return (
    <>
      <Modal show={showVideo} onHide={handleCloseHomeVideo}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Seleziona/modifica video</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Link>Seleziona il video da condividere</Link>
          <hr></hr>
          <Button variant="white" className="border-primary">
            <span className="text-primary">Annulla</span>
          </Button>
          <Button variant="light">
            <span>Fine</span>
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalHomeVideo;
