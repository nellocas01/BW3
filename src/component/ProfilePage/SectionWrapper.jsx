import { Col, Container, Row } from "react-bootstrap";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
  return (
    <Container className="mt-2 p-0">
      <Row>
        <Col>
          <section className="profile-card rounded-3 border bg-white p-3">
            {children}
          </section>
        </Col>
      </Row>
    </Container>
  );
};
