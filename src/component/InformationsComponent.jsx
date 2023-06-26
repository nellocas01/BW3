import { Col, Container, Row } from "react-bootstrap";

const InformationsComponent = () => {
  return (
    <Container className="mt-2 p-0">
      <Row>
        <Col>
          <section className="rounded-3 border-dark profile p-3">
            <h3>Informazioni</h3>
            <p>Full Stack Developer. HTML - CSS - JavaScript - ReactJS - Java </p>
          </section>
        </Col>
      </Row>
    </Container>
  );
};
export default InformationsComponent;
