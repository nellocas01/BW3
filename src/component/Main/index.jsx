/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Container, Row } from "react-bootstrap";
import SideComponent from "../SideComponent/index.jsx";
import ProfilePage from "../ProfilePage/index.jsx";

const MainComponent = ({ profiles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col md={9}>
            <ProfilePage />
          </Col>
          <Col md={3}>
            <SideComponent profiles={profiles} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MainComponent;
