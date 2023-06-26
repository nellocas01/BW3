import { Button, Modal } from "react-bootstrap";
import { CameraFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const ModalHomeEvent = ({ showEvent, handleCloseHomeEvent }) => {
  return (
    <>
      <Modal show={showEvent} onHide={handleCloseHomeEvent}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Crea un evento</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <CameraFill />
            <Link>Carica l'immagine di copertina</Link>
          </div>
          <p className="mb-0 mt-5">Tipo di evento</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label className="form-check-label">Online</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label">In sede</label>
          </div>
          <div className="form-floating mb-3 mt-5">
            <input type="text" className="form-control" id="floatingInput" />
            <label>Nome evento*</label>
          </div>
          <div className="mb-2">
            <label htmlFor="startDate" className="form-label mb-2">
              Data di inizio*
            </label>
            <input
              type="date"
              className="form-control"
              name="startDate"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="endDate" className="form-label mb-2">
              Data di fine
            </label>
            <input type="date" className="form-control" name="endDate" />
          </div>
          <div className="mb-2">
            <label htmlFor="description" className="form-label mb-2">
              Decrizione
            </label>
            <textarea
              className="form-control"
              placeholder="Esempio: Argomenti, pianificazione ecc.."
              name="description"
              rows={3}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="area" className="form-label mb-2">
              Località
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Esempio: Roma, Italia"
              name="area"
            />
          </div>
          <hr></hr>
          <Button variant="light">
            <span>Avanti</span>
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalHomeEvent;
