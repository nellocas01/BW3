import { useEffect, useState } from "react";
import coverImg from "../assets/img/cover.jpeg";
import profileImg from "../assets/img/img-profile.jpg";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";
// import { getSelectedProfileAction, getUserProfileAction } from "../redux/actions";
import { getSelectedProfileAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import ModalProfile from "./ModalProfile";

const ProfileComponent = () => {
  const dispatch = useDispatch();
  const params = useParams();

  // // const user = Object.keys(params).length === 0 && params.constructor === Object ? useSelector((state) => state.user.content) : useSelector((state) => state.selectedProfile.content);
  // if (Object.keys(params).length === 0 && params.constructor === Object) {
  const user = useSelector((state) => state.selectedProfile.content);
  // }

  // const user = useSelector((state) => state.user.content);
  // const selectedProfile = useSelector((state) => state.selectedProfile.content);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // useEffect(() => {
  //   console.log(Object.keys(params).length === 0 && params.constructor === Object);
  //   dispatch(getUserProfileAction());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    // console.log(Object.keys(params).length === 0 && params.constructor === Object);
    dispatch(getSelectedProfileAction(params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
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
              <Button variant="" bsPrefix="editBtn" className="btnLink" onClick={handleShow}>
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
                    <Card.Title className="truncate">Disponibile a lavorare 1</Card.Title>
                    <Card.Text className="truncate">Ruoli di Web Designer, Frontend Web Developer, Full Stack Web Developer</Card.Text>
                    <div>
                      <Card.Link>Mostra Dettagli</Card.Link>
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>

              <Carousel.Item>
                <Card>
                  <Card.Body>
                    <Card.Title className="truncate">Disponibile a lavorare 2</Card.Title>
                    <Card.Text className="truncate">Ruoli di Web Designer, Frontend Web Developer, Full Stack Web Developer</Card.Text>
                    <div>
                      <Card.Link>Mostra Dettagli</Card.Link>
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>

              <Carousel.Item>
                <Card>
                  <Card.Body>
                    <Card.Title className="truncate">Disponibile a lavorare 3</Card.Title>
                    <Card.Text className="truncate">Ruoli di Web Designer, Frontend Web Developer, Full Stack Web Developer</Card.Text>
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
  );
};
export default ProfileComponent;
