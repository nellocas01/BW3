import {
  Container,
  Dropdown,
  Form,
  FormControl,
  Image,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import {
  HouseDoorFill,
  BriefcaseFill,
  ChatDotsFill,
  BellFill,
  Search,
  PeopleFill,
  ChevronDown,
  GridFill,
} from "react-bootstrap-icons";
import avatar from "../../assets/img/avatar.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MyNavbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/jobs?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const navigateHome = () => {
    navigate("/home");
    window.scrollTo(0, 0);
  };

  const navigateBack = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const navigateJobs = () => {
    navigate("/jobs");
    window.scrollTo(0, 0);
  };

  return (
    <Navbar bg="white" expand="lg" className="border-bottom sticky-top">
      {" "}
      {/* bg="white" per lo sfondo bianco, sticky-top per rimanere in alto */}
      <Container>
        {/* Logo LinkedIn */}
        <Navbar.Brand
          href="/"
          onClick={navigateBack}
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
            alt="LinkedIn Logo"
            width="34"
            height="34"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Barra di ricerca */}
        <Form
          className="d-flex me-auto"
          onSubmit={handleSearchSubmit}
          style={{ width: "280px" }}
        >
          {" "}
          {/* me-auto per spingere gli elementi successivi a destra */}
          <InputGroup>
            <InputGroup.Text className="bg-light border-end-0">
              <Search />
            </InputGroup.Text>
            <FormControl
              type="search"
              placeholder="Cerca un lavoro..."
              className="me-2 bg-light border-start-0"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </InputGroup>
        </Form>

        {/* Elementi di navigazione centrali/destri */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {" "}
            {/* ms-auto per allineare a destra */}
            <Nav.Link
              href="/home"
              className="text-center mx-2 d-flex flex-column align-items-center"
              onClick={navigateHome}
            >
              <HouseDoorFill size={20} />
              <small>Home</small>
            </Nav.Link>
            <Nav.Link
              href="#"
              className="text-center mx-2 d-flex flex-column align-items-center"
            >
              <PeopleFill size={20} />
              <small>Rete</small>
            </Nav.Link>
            <Nav.Link
              href="/jobs"
              className="text-center mx-2 d-flex flex-column align-items-center"
              onClick={navigateJobs}
            >
              <BriefcaseFill size={20} />
              <small>Lavoro</small>
            </Nav.Link>
            <Nav.Link
              href="#"
              className="text-center mx-2 d-flex flex-column align-items-center"
            >
              <ChatDotsFill size={20} />
              <small>Messaggistica</small>
            </Nav.Link>
            <Nav.Link
              href="#"
              className="text-center mx-2 d-flex flex-column align-items-center"
            >
              <BellFill size={20} />
              <small>Notifiche</small>
            </Nav.Link>
            {/* "Tu" con immagine del profilo e dropdown */}
            <Dropdown as={Nav.Item} className="mx-2">
              <Dropdown.Toggle
                as={Nav.Link}
                className="text-center d-flex flex-column align-items-center p-0"
                id="dropdown-profile"
              >
                <Image src={avatar} roundedCircle width={30} />
                <small>
                  Tu <ChevronDown size={12} />
                </small>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {/* Qui potresti aggiungere gli elementi del dropdown, es. Visualizza profilo, Impostazioni, Logout */}
                <Dropdown.Item href="/" onClick={navigateBack}>
                  Visualizza profilo
                </Dropdown.Item>
                <Dropdown.Item href="#">Impostazioni e privacy</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Esci</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* "Per le aziende" con icona GridFill e dropdown */}
            <Dropdown as={Nav.Item} className="mx-2 border-start ps-3">
              {" "}
              {/* border-start per la linea verticale */}
              <Dropdown.Toggle
                as={Nav.Link}
                className="text-center d-flex flex-column align-items-center p-0"
                id="dropdown-business"
              >
                <GridFill size={20} />
                <small>
                  Per le aziende <ChevronDown size={12} />
                </small>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {/* Qui potresti aggiungere gli elementi del dropdown per le aziende */}
                <Dropdown.Item href="#">Crea un'azienda</Dropdown.Item>
                <Dropdown.Item href="#">
                  Pubblica un'offerta di lavoro
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* Link "Prova Premium" */}
            <Nav.Link
              href="#"
              className="text-center d-flex flex-column align-items-center mx-2"
            >
              <small className="text-warning text-decoration-underline">
                Prova Premium gratis
              </small>
              <small className="text-warning text-decoration-underline">
                per 1 mese
              </small>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
