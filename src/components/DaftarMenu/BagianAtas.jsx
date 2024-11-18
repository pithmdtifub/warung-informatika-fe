import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './BagianDaftarMenu.css'

function DaftarMenu() {
  return (
    <Container className="DaftarMenu">
      <Row>
        <Col className="Judul">Daftar Menu</Col>
      </Row>
      <Row className="barisFilter">
        <Col xs="auto" className="filter">Filter :</Col>
        <Col xs="auto">
          <Button className="button">Makanan Khas Indonesia</Button>
          <Button className="button">Gurih</Button>
          <Button className="buttonTambah">+</Button>
        </Col>
        <Col xs="auto" className="ms-auto d-flex align-items-center">
        <Form.Control
            type="text"
            placeholder="🔍 Ketik disini"
            className="search me-2"
          />
          <Button className="buttonKanan">Default</Button>
          <Button className="buttonAZ">A - Z</Button>
        </Col>

      </Row>
    </Container>
  );
}

export default DaftarMenu;