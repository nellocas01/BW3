import React from "react";
import { Card, Button, ListGroup, Stack, Image } from "react-bootstrap";
import {
  BookmarkCheckFill,
  JournalText,
  BriefcaseFill,
} from "react-bootstrap-icons";

const JobsSidebar = ({ jobs }) => {
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
        <ListGroup variant="flush">
          <ListGroup.Item
            action
            href="#preferenze"
            className="d-flex align-items-center"
          >
            <BookmarkCheckFill className="me-2" /> Le mie offerte di lavoro
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="#alert"
            className="d-flex align-items-center"
          >
            <JournalText className="me-2" /> Preferenze
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="#valutazioni"
            className="d-flex align-items-center"
          >
            <BriefcaseFill className="me-2" /> Le mie informazioni sulla
            carriera
          </ListGroup.Item>
        </ListGroup>
      </Card>

      {/* Bottone Pubblica offerta */}
      <Button variant="outline-primary">Pubblica offerta gratuita</Button>
    </Stack>
  );
};

export default JobsSidebar;
