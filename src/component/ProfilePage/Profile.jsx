import coverImg from "../../assets/img/cover.jpeg";
import profileImg from "../../assets/img/img-profile.jpg";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import ModalProfile from "../Modal/ModalProfile";

const Profile = ({ user, handleShow, show, handleClose }) => {
  return (
    <>
      <section className="rounded-3 border-dark mt-4 profile">
        <Row>
          <Col xs={12}>
            <div className="hero-img">
              <img src={coverImg} alt="" className="img-fluid" />
              <Link to="/">
                <Pencil />
              </Link>
            </div>
          </Col>
          <Col xs={12}>
            <div className="p-3">
              <div className="d-flex">
                <div className="rounded-circle image-profile">
                  <img className="img-fluid" src={profileImg} alt="" />
                </div>
                <div className="flex-grow-1 edit">
                  <div className="text-end">
                    <Link to="/">
                      <Pencil />
                    </Link>
                  </div>
                </div>
              </div>
              <h1 className="mt-3">
                {user.name} {user.surname}
              </h1>
              <p className="job">{user.title}</p>
              <p className="address">
                <span>{user.area}</span> -
                <Button
                  variant=""
                  bsPrefix="editBtn"
                  className="btnLink"
                  onClick={handleShow}
                >
                  Informazioni di contatto
                </Button>
                <ModalProfile show={show} handleClose={handleClose} />
              </p>
              <div className="link">
                <Link to="/">92 Collegamenti</Link>
              </div>
              <div className="d-flex mt-3">
                <Button className="me-2">Disponibile per</Button>
                <Button variant="outline-primary" className="me-2">
                  Aggiungi sezione del profilo
                </Button>
                <Button variant="outline-light">Altro</Button>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className="p-3">
              {/* Carousel React Bootstrap */}
              <Carousel slide={false} indicators={false}>
                <Carousel.Item>
                  <Card>
                    <Card.Body>
                      <Card.Title className="truncate">
                        Disponibile a lavorare 1
                      </Card.Title>
                      <Card.Text className="truncate">
                        Ruoli di Web Designer, Frontend Web Developer, Full
                        Stack Web Developer
                      </Card.Text>
                      <div>
                        <Card.Link>Mostra Dettagli</Card.Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Carousel.Item>

                <Carousel.Item>
                  <Card>
                    <Card.Body>
                      <Card.Title className="truncate">
                        Disponibile a lavorare 2
                      </Card.Title>
                      <Card.Text className="truncate">
                        Ruoli di Web Designer, Frontend Web Developer, Full
                        Stack Web Developer
                      </Card.Text>
                      <div>
                        <Card.Link>Mostra Dettagli</Card.Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Carousel.Item>

                <Carousel.Item>
                  <Card>
                    <Card.Body>
                      <Card.Title className="truncate">
                        Disponibile a lavorare 3
                      </Card.Title>
                      <Card.Text className="truncate">
                        Ruoli di Web Designer, Frontend Web Developer, Full
                        Stack Web Developer
                      </Card.Text>
                      <div>
                        <Card.Link>Mostra Dettagli</Card.Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};
export default Profile;
