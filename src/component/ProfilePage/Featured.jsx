import { Row, Col, Card, Button } from "react-bootstrap";
import { PlusLg, Pencil } from "react-bootstrap-icons";
import SectionWrapper from "./SectionWrapper";
import Logo from "../../assets/img/Keyword.PNG";

const Featured = () => {
  const featuredItems = [
    {
      id: 1,
      type: "video",
      thumbnail: Logo,
      title:
        "Il mio progetto finale presentato al termine del corso FULL-STACK…",
      link: "https://www.youtube.com/watch?v=yourvideoid",
      date: "DD 20230725",
      author: "Nello Casolla",
    },
  ];

  return (
    <SectionWrapper>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="section-title mb-0">In primo piano</h3>
        <div className="d-flex align-items-center">
          {/* Only show plus and pencil if it's the current user's profile */}
          <Button
            variant="link"
            className="add-item-button text-secondary me-2 p-0"
            title="Add new featured item"
          >
            <PlusLg className="fs-4" />
          </Button>
          <Button
            variant="link"
            className="edit-section-button text-secondary p-0"
            title="Edit featured items"
          >
            <Pencil className="fs-4" />
          </Button>
        </div>
      </div>

      {featuredItems.length > 0 ? (
        <div className="featured-items-grid">
          {featuredItems.map((item) => (
            <Card key={item.id} className="featured-item mb-3">
              <Row className="g-0">
                <Col xs={4}>
                  <Card.Img
                    src={item.thumbnail}
                    alt="Featured thumbnail"
                    className="img-fluid rounded-start"
                  />
                </Col>
                <Col xs={8}>
                  <Card.Body className="p-2">
                    <Card.Text className="text-secondary text-uppercase featured-type mb-1">
                      {item.type}
                    </Card.Text>
                    <Card.Title className="featured-title mb-1">
                      {item.title}
                    </Card.Title>
                    <Card.Text className="featured-meta text-secondary">
                      {item.date} {item.author && `- ${item.author}`}
                    </Card.Text>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visualizza
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-secondary">Nessun elemento in primo piano.</p>
      )}
    </SectionWrapper>
  );
};

export default Featured;
