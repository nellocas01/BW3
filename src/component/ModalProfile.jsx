import { Modal } from "react-bootstrap";
import { Envelope, Linkedin } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ModalProfile = ({ show, handleClose }) => {
  const user = useSelector((state) => state.user.content);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>
              {user.name} {user.surname}
            </h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Informazioni di contatto</h2>
          <div className="mb-3">
            <div className="d-flex align-items-center">
              <Linkedin />
              <h3>Il tuo profilo</h3>
            </div>
            <Link to="/">www.linkedin.it/{user.username}</Link>
          </div>
          <div className="mb-3">
            <div className="d-flex align-items-center">
              <Envelope />
              <h3>Email</h3>
            </div>
            <Link to="/">{user.email}</Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ModalProfile;
