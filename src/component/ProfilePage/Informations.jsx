import { Pencil } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import SectionWrapper from "./SectionWrapper";
import { Button } from "react-bootstrap";

const Informations = () => {
  const user = useSelector((state) => state.user.content);

  return (
    <SectionWrapper>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="section-title">Informazioni</h3>
        <Button
          variant="white"
          className="edit-section-icon text-secondary fs-4"
        >
          <Pencil />
        </Button>
      </div>
      <p className="information-text mt-2">{user.bio}</p>
    </SectionWrapper>
  );
};
export default Informations;
