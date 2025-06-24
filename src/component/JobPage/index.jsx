import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useAppContext } from "../../context/AppContext";
import { getJobs } from "../../redux/actions";
import JobsSidebar from "./JobsSidebar";
import MainJobsContent from "./MainJobsContent";
import { mockJobs } from "../../mockData";
import { useLocation, useNavigate } from "react-router-dom";

// Aggiungiamo un po' di stile per lo sfondo, puoi metterlo in un file CSS separato
const pageStyles = {
  backgroundColor: "#f4f2ee",
  padding: "2rem 0",
};

const JobsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setIsLoading, setError } = useAppContext();
  const location = useLocation();
  const jobs = useSelector((state) =>
    state.jobs.content ? state.jobs.content.data : mockJobs
  );
  const [companyQuery, setCompanyQuery] = useState("");
  const [categoryQuery, setCategoryQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryQuery.trim()) {
      navigate(`/jobs?category=${encodeURIComponent(categoryQuery.trim())}`);
    }
    if (companyQuery.trim()) {
      navigate(`/jobs?company=${encodeURIComponent(companyQuery.trim())}`);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const search = params.get("search");
    const company = params.get("company");
    const category = params.get("category");

    // fetch solo uno alla volta
    if (search) {
      dispatch(getJobs(setIsLoading, setError, "search", search));
    } else if (company) {
      dispatch(getJobs(setIsLoading, setError, "company", company));
    } else if (category) {
      dispatch(getJobs(setIsLoading, setError, "category", category));
    } else {
      dispatch(getJobs(setIsLoading, setError)); // fetch all
    }
  }, [location.search]);

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
            <Form className="mb-4" onSubmit={handleSubmit}>
              {/* Campo di ricerca per azienda */}
              <Form.Label>Ricerca per azienda</Form.Label>
              <Form.Control
                type="text"
                placeholder="Es. Olla"
                value={companyQuery}
                onChange={(e) => setCompanyQuery(e.target.value)}
              />
              {/* Campo di ricerca per categoria */}
              <Form.Label>Ricerca per categoria</Form.Label>
              <Form.Control
                type="text"
                placeholder="Es. writing, marketing..."
                value={categoryQuery}
                onChange={(e) => setCategoryQuery(e.target.value)}
              />
              <div
                style={{
                  marginTop: 5,
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Button variant="primary" type="submit">
                  Cerca
                </Button>
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    setCategoryQuery("");
                    setCompanyQuery("");
                    navigate("/jobs");
                  }}
                >
                  Reset Filtri
                </Button>
              </div>
            </Form>

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
