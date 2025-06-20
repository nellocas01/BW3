import { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { mockUser } from "../../mockData";

const ModalExperience = ({ show, handleCloseModalEx }) => {
  const userId = useSelector((state) =>
    state.user.content._id ? state.user.content._id : mockUser._id
  );
  const endPoint = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/`;
  const [experienceData, setExperienceData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExperienceData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(experienceData);
    if (experienceData.endDate === "") {
      setExperienceData.endDate = "null";
    }
    fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
      },
      body: JSON.stringify(experienceData),
    })
      .then((response) => {
        if (response.ok) {
          handleCloseModalEx();
          window.location.reload();
        } else {
          throw new Error("Errore durante l'invio dei dati");
        }
      })
      .catch((error) => console.log(error));
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
          <form onSubmit={handleSubmit}>
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
                value={experienceData.role}
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
                value={experienceData.company}
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
                value={experienceData.startDate}
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
                value={experienceData.endDate}
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
                value={experienceData.description}
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
                value={experienceData.area}
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
                <Button variant="primary" type="submit">
                  Salva
                </Button>
              </div>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalExperience;
