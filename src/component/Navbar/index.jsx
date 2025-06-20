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

const MyNavbar = () => {
  const navigate = useNavigate();

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
        <Navbar.Brand href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
            alt="LinkedIn Logo"
            width="34"
            height="34"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Barra di ricerca */}
        <Form className="d-flex me-auto" style={{ width: "280px" }}>
          {" "}
          {/* me-auto per spingere gli elementi successivi a destra */}
          <InputGroup>
            <InputGroup.Text className="bg-light border-end-0">
              <Search />
            </InputGroup.Text>
            <FormControl
              type="search"
              placeholder="Cerca"
              className="me-2 bg-light border-start-0"
              aria-label="Search"
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
  // return (
  //   <Navbar bg="dark" expand="lg" className="py-0 d-flex justify-content-center">
  //     <Col xs={8} className="mb-1">
  //       <Container className="d-flex align-items-center px-0">
  //         <Navbar.Brand href="#" className="p-0 d-block">
  //           <Linkedin className="text-light fs-1" />
  //         </Navbar.Brand>
  //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //         <Navbar.Collapse id="basic-navbar-nav">
  //           <Form className="ml-auto">
  //             <FormControl type="text" placeholder="cerca" className="mr-sm-2" />
  //           </Form>
  //         </Navbar.Collapse>

  //         <div className="px-4 fs-4 text-center nav-item-col" onClick={navigateBack}>
  //           <HouseDoorFill />
  //           <p className=" fs-6 m-0">Home</p>
  //         </div>

  //         <div className="px-4 fs-4 text-center nav-item-col">
  //           <PersonLinesFill />
  //           <p className=" fs-6 m-0">Rete</p>
  //         </div>
  //         <div className="px-4 fs-4 text-center nav-item-col">
  //           <BriefcaseFill />
  //           <p className=" fs-6 m-0">Lavoro</p>
  //         </div>
  //         <div className="px-4 fs-4 text-center nav-item-col">
  //           <ChatDotsFill />
  //           <p className=" fs-6 m-0">Messaggistica</p>
  //         </div>
  //         <div className="px-4 fs-4 text-center nav-item-col">
  //           <BellFill />
  //           <p className=" fs-6 m-0">Notifiche</p>
  //         </div>
  //         <div className="px-4 fs-4 text-center nav-item-col">
  //           <img id="avatar" src={avatar} alt="Avatar" className="rounded-circle" />
  //           <div className=" fs-6 m-0">
  //             <NavDropdown
  //               id="nav-dropdown-dark-example"
  //               title="Tu"
  //               menuVariant="dark"
  //               className="text-center"
  //               align={{ lg: "end" }}
  //             >
  //               <NavDropdown.Item href="#action/3.1">
  //                 <div className="d-flex justify-content-center">
  //                   <div className="me-3 d-flex align-items-center">
  //                     <img id="avatar-big" src={avatar} alt="Avatar" className="rounded-circle" />
  //                   </div>
  //                   <div>
  //                     <h3 className="fs-4">Ajeje Brazorv</h3>
  //                     <p>Full Stack Development student presso Epicode Italia</p>
  //                   </div>
  //                 </div>
  //                 <button className="rounded-5 text-center flex-grow-1">Visualizza Profilo</button>
  //               </NavDropdown.Item>
  //               <NavDropdown.Item href="#action/3.2">
  //                 <h3 className="fs-4">Account</h3>
  //               </NavDropdown.Item>
  //               <NavDropdown.Item href="#action/3.3">Impostazioni e Privacy</NavDropdown.Item>
  //               <NavDropdown.Item href="#action/3.3">Guida</NavDropdown.Item>
  //               <NavDropdown.Item href="#action/3.3">Lingua</NavDropdown.Item>
  //               <NavDropdown.Divider />
  //               <NavDropdown.Item href="#action/3.2">
  //                 <h3 className="fs-4">Gestisci</h3>
  //               </NavDropdown.Item>
  //               <NavDropdown.Item href="#action/3.3">Post e Attività</NavDropdown.Item>
  //               <NavDropdown.Item href="#action/3.3">Account per pubblicazione offerte</NavDropdown.Item>
  //               <NavDropdown.Divider />
  //               <NavDropdown.Item href="#action/3.3">Esci</NavDropdown.Item>
  //             </NavDropdown>
  //           </div>
  //         </div>

  //         <div className="ps-4 fs-4 text-center border-start border-white-50 nav-item-col">
  //           <Building />
  //           <div className="fs-6">
  //             <NavDropdown id="nav-dropdown-dark-example" title="Per le aziende" menuVariant="dark"></NavDropdown>
  //           </div>
  //         </div>
  //       </Container>
  //     </Col>
  //   </Navbar>
  // );
};
export default MyNavbar;
