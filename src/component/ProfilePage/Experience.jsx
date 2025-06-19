import { Button, Container } from "react-bootstrap";
import { ArrowRight, Pencil, PlusLg } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalExperience from "../Modal/ModalExperience";
import EpicodeImg from "../../assets/img/epicode-logo.png";

const Experience = ({ experience }) => {
  const navigate = useNavigate();
  const [showModalEx, setShowModalEx] = useState(false);

  const handleCloseModalEx = () => setShowModalEx(false);
  const handleShowModalEx = () => setShowModalEx(true);

  const navigateToExperience = () => {
    navigate("/experience");
    window.scrollTo(0, 0);
  };

  return (
    <Container className="mt-2 p-0">
      <section className="profile-card rounded-3 border bg-white p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="section-title mb-0">Esperienze</h3>
          <div className="d-flex align-items-center">
            <Button
              onClick={handleShowModalEx}
              variant="link"
              className="add-item-button text-secondary me-2 p-0"
              title="Add new experience"
            >
              <PlusLg className="fs-4" />
            </Button>
            <ModalExperience
              show={showModalEx}
              handleCloseModalEx={handleCloseModalEx}
            />
            <Button
              onClick={navigateToExperience}
              variant="link"
              className="edit-section-button text-secondary p-0"
              title="Edit experiences"
            >
              <Pencil className="fs-4" />
            </Button>
          </div>
        </div>
        {experience && experience.length > 0 ? (
          experience.slice(0, 5).map((item) => (
            <div key={item._id} className="experience-item d-flex py-3">
              <img
                src={EpicodeImg}
                alt={item.company}
                className="company-logo me-3 mt-1"
                width={48}
                height={48}
              />
              <div className="experience-details flex-grow-1">
                <p className="role fw-bold mb-0">{item.role}</p>
                <p className="company text-secondary mb-0">{item.company}</p>
                <p className="duration text-secondary mb-0">
                  {new Date(item.startDate).toLocaleDateString("it-IT", {
                    year: "numeric",
                    month: "short",
                  })}{" "}
                  -{" "}
                  {item.endDate
                    ? new Date(item.endDate).toLocaleDateString("it-IT", {
                        year: "numeric",
                        month: "short",
                      })
                    : "Presente"}
                </p>
                <p className="location text-secondary mb-0">{item.area}</p>
                {item.description && (
                  <p className="skills-description mt-2 mb-0">
                    <span className="fw-bold">Competenze: </span>{" "}
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-secondary">Nessuna esperienza aggiunta.</p>
        )}
        {experience && experience.length > 5 && (
          <div className="d-flex justify-content-center mt-3 border-top pt-3">
            <Button
              onClick={navigateToExperience}
              variant="link"
              className="show-all-button text-secondary align-items-center d-flex p-0"
            >
              Mostra tutte le esperienze ({experience.length})
              <ArrowRight className="ms-2" />
            </Button>
          </div>
        )}
      </section>
    </Container>
  );
};

export default Experience;
