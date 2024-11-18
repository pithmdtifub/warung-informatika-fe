import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './BagianDaftarMenu.css'

function DaftarMenu() {
  return (
    <Container className="PilihanMenu">
      <Row className="Sidebar">
        <Col className="d-flex flex-column">
          <Button className="buttonSidebar mb-3">Semua</Button>
          <Button className="buttonSidebar mb-3">Makanan Berat</Button>
          <Button className="buttonSidebar mb-3">Makanan Ringan</Button>
          <Button className="buttonSidebar mb-3">Minuman</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default DaftarMenu;