import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Navbar.css'

function navbarWarungInformatika() {
  
  return (
    <>
    <Navbar className="navbar sticky-top" expand="lg" bg="light" data-bs-theme="light">
      <Container fluid className="d-flex">
          <Navbar.Brand className="navbar-brand">Warung Informatika</Navbar.Brand>
          <Button className="button">Login</Button>
      </Container>
    </Navbar>
    </>
  );
}

export default navbarWarungInformatika;