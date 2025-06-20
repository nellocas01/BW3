import React from "react";
import {
  Card,
  Button,
  ListGroup,
  Stack,
  Image,
  CloseButton,
} from "react-bootstrap";
import { Linkedin } from "react-bootstrap-icons";

const recentSearches = [
  { term: "Frontend Developer", count: 31 },
  { term: "Frontend Developer", count: 132 },
];

const MainJobsContent = ({ jobs }) => {
  const stripHtml = (html) => html.replace(/<[^>]*>?/gm, "");
  const truncate = (text, maxLength) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <Stack gap={3}>
      {/* Principali offerte di lavoro */}
      <Card>
        <Card.Body>
          <Card.Title>Le principali offerte di lavoro per te</Card.Title>
          <Card.Subtitle className="mb-2 text-muted small">
            In base al tuo profilo, alle tue preferenze e ad attività come
            candidatura, ricerche e salvataggio
          </Card.Subtitle>
        </Card.Body>
        <ListGroup variant="flush">
          {jobs?.slice(1, 30).map((job, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-start mt-1 mb-1"
            >
              <div className="d-flex">
                <Image
                  src="https://placehold.co/40x40"
                  alt="logo"
                  className="me-3"
                />
                <div>
                  <a href="#job" className="fw-bold text-decoration-none">
                    {job.title}
                  </a>
                  <div className="text-muted small">{job.company_name}</div>
                  <div className="text-muted small">
                    {job.candidate_required_location}
                  </div>
                  <div className="text-muted small">
                    {truncate(stripHtml(job.description), 500)}
                  </div>
                  <div className="text-muted small mt-2 d-flex align-items-center">
                    <Linkedin size={16} className="me-2" /> Valutazione attiva
                    delle candidature
                  </div>
                  {job.promoted && (
                    <div className="text-muted small">Promosso</div>
                  )}
                </div>
              </div>
              <CloseButton />
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Footer className="text-center bg-white">
          <Button variant="link" className="text-decoration-none fw-bold">
            Mostra tutto
          </Button>
        </Card.Footer>
      </Card>

      {/* Ricerche di offerte di lavoro recenti */}
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Title className="mb-0">
              Ricerche di offerte di lavoro recenti
            </Card.Title>
            <Button variant="link" size="sm" className="text-decoration-none">
              Cancella
            </Button>
          </div>
          <ListGroup variant="flush" className="mt-2">
            {recentSearches.map((search, index) => (
              <ListGroup.Item
                key={index}
                className="d-flex justify-content-between align-items-center px-0"
              >
                <div>
                  <a href="#search" className="fw-bold text-decoration-none">
                    {search.term}
                  </a>
                  <div className="text-muted small">Italia</div>
                </div>
                <div className="text-muted small">{search.count} nuove</div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Stack>
  );
};

export default MainJobsContent;
