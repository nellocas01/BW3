import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../../assets/img/avatar.png";
import { CalendarDate, CardText, PlayBtnFill } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import ModalHome from "../Modal/ModalHome";
import { useDispatch, useSelector } from "react-redux";
import { mockComments, mockPosts, mockUser } from "../../mockData";
import { getComments, getPostList } from "../../redux/actions";
import { useAppContext } from "../../context/AppContext";
import Keyword from "../../assets/img/Keyword.PNG";

const Home = () => {
  const dispatch = useDispatch();
  const { setIsLoading, setError } = useAppContext();
  const user = useSelector((state) =>
    Array.isArray(state.user.content) && state.user.content.length > 0
      ? state.user.content
      : mockUser
  );
  const post = useSelector((state) =>
    Array.isArray(state.posts?.content) && state.posts.content.length > 0
      ? state.posts.content
      : mockPosts
  );
  const comment = useSelector((state) =>
    Array.isArray(state.comments?.content) && state.comments.content.length > 0
      ? state.comments.content
      : mockComments
  );

  const navigate = useNavigate();
  const navigateHomePage = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  const [show, setShow] = useState(false);
  const handleCloseHome = () => setShow(false);
  const handleShowHome = () => setShow(true);

  useEffect(() => {
    dispatch(getPostList(setIsLoading, setError));
    dispatch(getComments(setIsLoading, setError));
  }, []);

  const commentByPost = comment.reduce((acc, c) => {
    if (!acc[c.elementId]) acc[c.elementId] = [];
    acc[c.elementId].push(c);
    return acc;
  }, {});

  return (
    <>
      {/* CONTAINER GENERALE */}
      <Container className="mt-4">
        <Row>
          {/* COLONNA SINISTRA */}
          <Col md={3}>
            <Card className="mb-3">
              <Card.Body className="text-center">
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
                  <Card.Title>
                    {user.name} {user.surname}
                  </Card.Title>
                </Link>
                <Card.Subtitle className="mb-2 text-muted">
                  {user.title}
                </Card.Subtitle>
                <Card.Text>{user.area}</Card.Text>
                <hr />
                <div className="d-flex justify-content-between">
                  <span>Visualizzazioni del profilo</span>
                  <span>35</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Visualizza tutte le analisi</span>
                </div>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body>
                <h6>Elementi salvati</h6>
                <h6>Gruppi</h6>
                <h6>Newsletter</h6>
                <h6>Eventi</h6>
              </Card.Body>
            </Card>
          </Col>

          {/* COLONNA CENTRALE */}
          <Col md={6}>
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
                  <Button variant="white" className="p-0 mx-2">
                    <PlayBtnFill className="text-success" />
                    <span className="mx-2 text-secondary">Video</span>
                  </Button>
                  <Button variant="white" className="p-0 mx-2">
                    <CalendarDate className="text-warning" />
                    <span className="mx-2 text-secondary">Evento</span>
                  </Button>
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

            {post
              .filter((p) => p && p.username)
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((posts) => {
                const postComments = commentByPost[posts._id] || [];
                return (
                  <Card className="mb-3" key={posts._id}>
                    <Card.Body>
                      <div className="d-flex align-items-center mb-2">
                        <img src={avatar} alt="" width={80} />

                        <div style={{ marginLeft: "auto" }}>
                          <Card.Title className="mb-2">
                            {posts.username}
                          </Card.Title>
                          <Card.Subtitle className="text-muted">
                            {posts.job}
                          </Card.Subtitle>
                          <small className="text-muted">
                            Pubblicato il{" "}
                            {new Date(posts.createdAt).toLocaleDateString(
                              "it-IT"
                            )}
                          </small>
                        </div>
                      </div>
                      <Card.Text>{posts.text}</Card.Text>

                      <div className="mb-2">
                        <small className="text-primary me-2">
                          #SoftwareEngineering
                        </small>
                        <small className="text-primary me-2">#Developers</small>
                        <small className="text-primary">#Memes</small>
                      </div>
                      <Card.Link href="#">Mostra traduzione</Card.Link>
                      <hr />

                      {/* SEZIONE COMMENTI */}
                      {postComments.length > 0 && (
                        <div className="mb-3">
                          <strong>Commenti:</strong>
                          <ul className="list-unstyled mt-2">
                            {postComments.map((c, idx) => (
                              <li key={idx} className="mb-2">
                                <div>
                                  <strong>Voto:</strong> {c.rate}/5
                                </div>
                                <div>{c.comment}</div>
                              </li>
                            ))}
                          </ul>
                          <hr />
                        </div>
                      )}

                      <div className="d-flex justify-content-around">
                        <Button variant="link">Mi piace</Button>
                        <Button variant="link">Commenta</Button>
                        <Button variant="link">Condividi</Button>
                        <Button variant="link">Invia</Button>
                      </div>
                    </Card.Body>
                  </Card>
                );
              })}
            {/* Altri elementi centrali come l'annuncio di lavoro */}
            <Card className="mb-3">
              <Card.Body>
                <Card.Title className="text-center">
                  • Minimum of 4 years
                </Card.Title>
                <Card.Title className="text-center">
                  of experience is required
                </Card.Title>
                <Card.Text className="text-center">
                  Interested? Send your resume
                  <br />
                  to <a href="mailto:careers@localhost">careers@localhost</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* COLONNA DESTRA */}
          <Col md={3}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>LinkedIn Notizie</Card.Title>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Quanti sono i rifugiati in Italia</a>
                  </li>
                  <li>
                    <a href="#">Putin ha le prime 100 università al mondo</a>
                  </li>
                  <li>
                    <a href="#">Via libera Ue per Unicredit Banca Bpm</a>
                  </li>
                  <li>
                    <a href="#">Perché il lusso continua a rallentare</a>
                  </li>
                  <li>
                    <a href="#">Nuovo esonero contributivo per ilary</a>
                  </li>
                </ul>
                <Button variant="link">Mostra altro</Button>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Il rompicapo di oggi</Card.Title>
                <div className="d-flex align-items-center">
                  <Image src={Keyword} className="me-2" />
                  <span>Zip - un rompicapo veloce</span>
                </div>
              </Card.Body>
            </Card>

            <Card className="mb-3 text-center">
              <Card.Body>
                <Card.Text>Annuncio</Card.Text>
                <Image src={avatar} width={80} roundedCircle className="mb-2" />
                <Card.Text>
                  Boost your job search with Ai-powered insights
                </Card.Text>
                <Button variant="primary">Redeem offer</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
