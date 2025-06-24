import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { mockUser } from "../../mockData";
import {
  deleteUserExperienceAction,
  editUserExperienceAction,
  getUserExperienceAction,
} from "../../redux/actions";
import { useAppContext } from "../../context/AppContext";

const ModalExperienceDeletePut = ({ show, handleCloseModalEx, experience }) => {
  const dispatch = useDispatch();
  const { setIsLoading, setError } = useAppContext();
  const userId = useSelector((state) =>
    state.user.content._id ? state.user.content._id : mockUser._id
  );
  const [experienceItem, setExperienceItem] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  useEffect(() => {
    setExperienceItem({
      role: experience.role,
      company: experience.company,
      startDate: experience.startDate?.slice(0, 10) || "",
      endDate: experience.endDate?.slice(0, 10) || "",
      description: experience.description,
      area: experience.area,
    });
  }, [experience]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExperienceItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(
      deleteUserExperienceAction(userId, experience._id, setIsLoading, setError)
    );
    handleCloseModalEx();
    dispatch(getUserExperienceAction(userId, setIsLoading, setError));
  };

  const handleMod = (event) => {
    event.preventDefault();
    dispatch(
      editUserExperienceAction(
        userId,
        experience._id,
        experienceItem,
        setIsLoading,
        setError
      )
    );
    handleCloseModalEx();
    dispatch(getUserExperienceAction(userId, setIsLoading, setError));
  };

  return (
    <>
      <Modal show={show} onHide={handleCloseModalEx}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Aggiungi esperienza lavorativa</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleMod}>
            <div id="emailHelp" className="form-text mb-2">
              * Indica che è obbligatorio
            </div>
            <div className="mb-2">
              <label htmlFor="role" className="form-label mb-2">
                Qualifica*
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Esempio: Retails Sales Manager"
                name="role"
                value={experienceItem.role}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="company" className="form-label mb-2">
                Nome azienda*
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Esempio: Microsoft"
                name="company"
                value={experienceItem.company}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="startDate" className="form-label mb-2">
                Data di inizio*
              </label>
              <input
                type="date"
                className="form-control"
                name="startDate"
                value={experienceItem.startDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="endDate" className="form-label mb-2">
                Data di fine
              </label>
              <input
                type="date"
                className="form-control"
                name="endDate"
                value={experienceItem.endDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="description" className="form-label mb-2">
                Competenze
              </label>
              <textarea
                className="form-control"
                placeholder="Esempio: Gestione contabilità, Amministrazione, Approvvigionamento Risorse ecc."
                name="description"
                value={experienceItem.description}
                onChange={handleInputChange}
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
                value={experienceItem.area}
                onChange={handleInputChange}
              />
            </div>
            <Modal.Footer className="d-flex justify-content-between">
              <div>
                <Button variant="secondary" onClick={handleCloseModalEx}>
                  Annulla
                </Button>
              </div>
              <div>
                <Button
                  variant="danger"
                  className="mx-1"
                  onClick={handleDelete}
                >
                  Elimina
                </Button>
                <Button variant="warning" type="submit" className="mx-1">
                  Modifica
                </Button>
              </div>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalExperienceDeletePut;
