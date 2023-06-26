import { useState } from "react";
import EpicodeImg from "../assets/img/epicode-logo.png";
import { Button } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import ModalExperienceDeletePut from "./ModalExperienceDeletePut";

const ExperienceSection = item => {
  const [show, setShow] = useState(false);
  const handleCloseModalEx = () => setShow(false);
  const handleShowModalEx = () => setShow(true);

  return (
    <div key={item.item._id}>
      <div className="d-flex justify-content-start align-item.items-center">
        <img src={EpicodeImg} alt="" className="img-fluid mb-5" width={50} />
        <div className="d-flex justify-content-between  flex-grow-1">
          <div className="d-flex flex-column">
            <p className="ms-3 fw-bold text-secondary">{item.item.role}</p>
            <p className="ms-3 text-secondary">{item.item.company}</p>
            <p className="ms-3 text-secondary">
              {new Date(item.item.startDate).toLocaleDateString()} - {new Date(item.item.endDate).toLocaleDateString()}
            </p>
            <p className="ms-3 text-secondary">{item.item.area}</p>
            <p className="ms-3 mt-3">
              <span className="fw-bold">Competenze: </span> {item.item.description}
            </p>
          </div>
          <div>
            <Button onClick={handleShowModalEx} variant="light" className="rounded-pill mt-0 my-2 ml-auto">
              <Pencil />
            </Button>
            <ModalExperienceDeletePut show={show} handleCloseModalEx={handleCloseModalEx} experience={item.item} />
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};
export default ExperienceSection;
