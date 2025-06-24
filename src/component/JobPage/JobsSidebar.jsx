import React from "react";
import { Card, Button, ListGroup, Stack, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const JobsSidebar = ({ jobs }) => {
  const favorites = useSelector((state) => state.jobFavorites.favorites);

  return (
    <Stack gap={3}>
      {/* Card offerta salvata */}
      <Card>
        <Card.Body>
          <Card.Text className="mb-2">
            Rispondi all'offerta di lavoro che hai salvato
          </Card.Text>
          <div className="d-flex align-items-center">
            <Image
              src="https://placehold.co/40x40"
              alt="Company Logo"
              className="me-3"
            />
            <div>
              <Card.Title as="h6" className="mb-0">
                <a href="#job" className="text-decoration-none">
                  {jobs?.title}
                </a>
              </Card.Title>
              <Card.Text className="text-muted small">
                {jobs?.company_name}
              </Card.Text>
            </div>
          </div>
          <Button variant="primary" className="w-100 mt-3">
            Candidati
          </Button>
        </Card.Body>
      </Card>

      {/* Lista preferenze */}
      <Card>
        <Card.Body>
          <Card.Title>Offerte preferite</Card.Title>
          {favorites.length === 0 ? (
            <div className="text-muted small">Nessuna offerta salvata</div>
          ) : (
            <ListGroup variant="flush">
              {favorites.map((job) => (
                <ListGroup.Item key={job._id}>
                  <div>{job.title}</div>
                  <div className="text-muted small">{job.company_name}</div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Card.Body>
      </Card>

      {/* Bottone Pubblica offerta */}
      <Button variant="outline-primary">Pubblica offerta gratuita</Button>
    </Stack>
  );
};

export default JobsSidebar;
