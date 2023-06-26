import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const ModalHomeImg = ({ showImg, handleCloseHomeImg }) => {
  return (
    <>
      <Modal show={showImg} onHide={handleCloseHomeImg}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Modifica la tua foto</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Link>Seleziona le immagini da condividere</Link>
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

export default ModalHomeImg;
