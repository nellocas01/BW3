import { Button, Col, Container, Row } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import SideComponent from "./SideComponent";
import { useSelector } from "react-redux";
import ExperienceSection from "./ExperienceSection";
import PeopleComponent from "./PeopleComponent";

const ExperiencesPageComponents = () => {
  const navigate = useNavigate();
  const experience = useSelector(state => state.experience.content);

  const navigateToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <Container className="mt-2 p-0">
      <Row>
        <Col md={9}>
          <section className="mt-4 rounded-3 border-dark profile p-3">
            <div className="d-flex">
              <div className="d-flex justify-content-start align-items-center">
                <Button variant="light" onClick={navigateToHome} className="rounded-pill my-2">
                  <ArrowLeft className="fs-2" />
                </Button>
                <h3 className="ms-3">Esperienze</h3>
              </div>
            </div>
            {experience && experience.map(item => <ExperienceSection item={item} />)}
          </section>
        </Col>
        <Col md={3}>
          <SideComponent />
          <PeopleComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default ExperiencesPageComponents;
