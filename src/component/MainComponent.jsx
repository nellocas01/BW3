/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Container, Row } from "react-bootstrap";
import SideComponent from "./SideComponent";
import PeopleComponent from "./PeopleComponent";
import ProfilePage from "./ProfilePage";

const MainComponent = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={9}>
            <ProfilePage />
          </Col>
          <Col md={3}>
            <SideComponent />
            <PeopleComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MainComponent;
