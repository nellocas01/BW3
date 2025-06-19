import { Modal, Spinner } from "react-bootstrap";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ open, loading }) => {
  return (
    <Modal
      show={open}
      centered
      backdrop="static"
      keyboard={false}
      contentClassName="bg-dark text-white text-center"
    >
      <Modal.Body>
        <Spinner animation="border" role="status" variant="light" />
        <div className="mt-3">{loading}</div>
      </Modal.Body>
    </Modal>
  );
};
