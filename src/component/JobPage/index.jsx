import React, { useEffect } from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useAppContext } from "../../context/AppContext";
import { getJobs } from "../../redux/actions";
import JobsSidebar from "./JobsSidebar";
import MainJobsContent from "./MainJobsContent";
import { mockJobs } from "../../mockData";

// Aggiungiamo un po' di stile per lo sfondo, puoi metterlo in un file CSS separato
const pageStyles = {
  backgroundColor: "#f4f2ee",
  padding: "2rem 0",
};

const JobsPage = () => {
  const dispatch = useDispatch();
  const { setIsLoading, setError } = useAppContext();
  const jobs = useSelector((state) =>
    state.jobs.content ? state.jobs.content.data : mockJobs
  );

  useEffect(() => {
    dispatch(getJobs(setIsLoading, setError));
  }, []);

  return (
    <div style={pageStyles}>
      <Container>
        <Row className="g-4">
          {/* Colonna Sinistra */}
          <Col md={4} lg={3}>
            <JobsSidebar jobs={jobs?.[0] || null} />
          </Col>

          {/* Colonna Destra */}
          <Col md={8} lg={6}>
            <MainJobsContent jobs={jobs} />
          </Col>

          {/* Qui potresti aggiungere una terza colonna se necessario, come quella per la promo di Premium */}
          <Col lg={3} className="d-none d-lg-block">
            {/* Promo Premium */}
            <Card>
              <Card.Body>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <Image
                      src="https://placehold.co/32x32/E0E0E0/000000"
                      roundedCircle
                    />
                    <Image
                      src="https://placehold.co/32x32/BDBDBD/000000"
                      roundedCircle
                      style={{ marginLeft: "-15px" }}
                    />
                  </div>
                  <Card.Text className="small">
                    Fatti notare dai recruiter con offerte di lavoro
                    personalizzate per te
                  </Card.Text>
                </div>
                <Button variant="outline-primary" className="mt-3">
                  Prova Premium per 0 EUR
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JobsPage;
