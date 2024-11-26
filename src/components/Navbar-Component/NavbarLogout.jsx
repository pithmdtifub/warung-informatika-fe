import { Link } from "react-router-dom";
import { Container, Navbar, Button } from 'react-bootstrap';
import './Navbar.css'


function navbarWarungInformatika() {
  
  return (
    <Navbar className="navbar sticky-top" expand="lg" bg="light" data-bs-theme="light">
      <Container fluid className="d-flex">
          <Navbar.Brand className="navbar-brand-logout">Warung Informatika</Navbar.Brand>
          <Link to={'/'}>
            <Button className="button-login">Logout</Button>
          </Link>
      </Container>
    </Navbar>
  );
}

export default navbarWarungInformatika;