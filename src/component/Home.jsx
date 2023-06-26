import { Button, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../avatar.png";
import {
  ArrowsFullscreen,
  CalendarDate,
  CardText,
  ChatText,
  HandThumbsUp,
  Image,
  PlayBtnFill,
  SendFill,
  ThreeDots,
} from "react-bootstrap-icons";
import { useState } from "react";
import ModalHome from "./ModalHome";
import ModalHomeImg from "./ModalHomeImg";
import { useSelector } from "react-redux";
import ModalHomeVideo from "./ModalHomeVideo";
import ModalHomeEvent from "./ModalHomeEvent";

const Home = () => {
  const user = useSelector((state) => state.user.content);

  const navigate = useNavigate();
  const navigateHomePage = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  const [show, setShow] = useState(false);
  const handleCloseHome = () => setShow(false);
  const handleShowHome = () => setShow(true);

  const [showImg, setShowImg] = useState(false);
  const handleCloseHomeImg = () => setShowImg(false);
  const handleShowHomeImg = () => setShowImg(true);

  const [showVideo, setShowVideo] = useState(false);
  const handleCloseHomeVideo = () => setShowVideo(false);
  const handleShowHomeVideo = () => setShowVideo(true);

  const [showEvent, setShowEvent] = useState(false);
  const handleCloseHomeEvent = () => setShowEvent(false);
  const handleShowHomeEvent = () => setShowEvent(true);
  return (
    <>
      {/* CONTAINER GENERALE */}
      <div className="d-flex align-items-start mt-3 justify-content-center">
        {/* COLONNA SINISTRA */}
        <div className="mx-3">
          <div className="mx-3 bg-white border rounded p-4">
            <div className="">
              <img
                id="avatar"
                src={avatar}
                alt="Avatar"
                className="rounded-circle d-flex mx-auto"
                onClick={navigateHomePage}
              />
              <Link
                className="d-flex justify-content-center my-4"
                onClick={navigateHomePage}
              >
                {user.name} {user.surname}
              </Link>
              <p>Studente</p>
              {/* dinamicizzare i p */}
            </div>
            <hr></hr>
            <div>
              <p>collegamenti</p>
            </div>
            <hr></hr>
            <div>
              <p>Accedi a strumenti e info</p>
            </div>
            <hr></hr>
            <div>
              icons
              <span>I miei elementi</span>
            </div>
          </div>
          <div className="mx-3 mt-3 bg-white border rounded p-4">
            <p>Gruppi</p>
            <p>Eventi</p>
            <p>Hashtag più seguiti</p>
            <hr></hr>
            <Button>Scopri di più</Button>
          </div>
        </div>
        <div>
          {/* COLONNA CENTRALE */}
          <div className="bg-white border rounded">
            <div className="m-3">
              <div className="d-flex mb-3">
                <Link>
                  <div className="m-2">
                    <img
                      id="avatar"
                      src={avatar}
                      alt="Avatar"
                      className="rounded-circle"
                      onClick={navigateHomePage}
                    />
                  </div>
                </Link>
                <Button
                  className="border"
                  variant="light"
                  onClick={handleShowHome}
                >
                  <span className="text-secondary">Avvia un post</span>
                </Button>
                <ModalHome show={show} handleCloseHome={handleCloseHome} />
              </div>
              <div>
                <Button
                  variant="white"
                  className="p-0 mx-2"
                  onClick={handleShowHomeImg}
                >
                  <Image className="text-primary" />
                  <span className="mx-2 text-secondary">Foto</span>
                </Button>
                <ModalHomeImg
                  showImg={showImg}
                  handleCloseHomeImg={handleCloseHomeImg}
                />
                <Button
                  variant="white"
                  className="p-0 mx-2"
                  onClick={handleShowHomeVideo}
                >
                  <PlayBtnFill className="text-success" />
                  <span className="mx-2 text-secondary">Video</span>
                </Button>
                <ModalHomeVideo
                  showVideo={showVideo}
                  handleCloseHomeVideo={handleCloseHomeVideo}
                />
                <Button
                  variant="white"
                  className="p-0 mx-2"
                  onClick={handleShowHomeEvent}
                >
                  <CalendarDate className="text-warning" />
                  <span className="mx-2 text-secondary">Evento</span>
                </Button>
                <ModalHomeEvent
                  showEvent={showEvent}
                  handleCloseHomeEvent={handleCloseHomeEvent}
                />
                <Button variant="white" className="p-0 mx-2">
                  <CardText className="text-danger" />
                  <span className="mx-2 text-secondary">
                    Scrivi un articolo
                  </span>
                </Button>
              </div>
            </div>
          </div>
          <Row className="align-items-center">
            <Col xs={8}>
              <hr></hr>
            </Col>
            <Col xs={4} className="text-center fs-6">
              Ordina per: principali
            </Col>
          </Row>
          <div className="bg-white border rounded mt-3">
            <div className="m-3">
              <div className="d-flex mb-3">
                <img src={avatar} alt="" width={80} />
                <div>
                  <Link>Acquatech</Link>
                  <p>8.118 follower</p>
                  <p>Post sponsorizzato</p>
                </div>
                <Button className="ms-auto" variant="white">
                  <ThreeDots />
                </Button>
              </div>
              <p>
                Explore water business opportunity for the pizza in the pasta
              </p>
              <div>
                <div>
                  <img src={avatar} alt="" width={400} />
                </div>
                <div>
                  <Link>acquatechrade.com</Link>
                  <br />
                  <span className="me-5">Acquatech China: 5-7 June 2023</span>
                  <Button className="ms-5">Scopri di più</Button>
                </div>
              </div>
              <div>
                36
                <HandThumbsUp className="me-5" />
                <span className="ms-5">1 diffusione post</span>
              </div>
              <hr></hr>
              <div>
                <Button variant="white">
                  <HandThumbsUp />
                  <span className="mx-2">Consiglia</span>
                </Button>
                <Button variant="white">
                  <ChatText />
                  <span className="mx-2">Commenta</span>
                </Button>
                <Button variant="white">
                  <ArrowsFullscreen />
                  <span className="mx-2">Diffondi il post</span>
                </Button>
                <Button variant="white">
                  <SendFill />
                  <span className="mx-2">Invia</span>
                </Button>
              </div>
              <p>ℹ️ Scrivi il tuo primo commento</p>
            </div>
          </div>
        </div>

        {/* COLONNA DESTRA */}
        <div className="mx-3">
          <div className="mx-3 bg-white border rounded p-4">
            <div>
              <h5>Linkedin Notizie</h5>
              <ul>
                <li>Le top Companies del 2023 in Italia</li>
              </ul>
              <Button>Visualizza altro</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
