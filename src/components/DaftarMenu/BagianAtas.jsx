import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './BagianDaftarMenu.css'

function DaftarMenu() {
  return (
    <>
    <div className="bottom-section">
      <Container fluid className="bottom-section d-flex flex-row py-3 align-items-center">
        <Row className="w-100 align-items-center">
          <Col xs={12} md={6} className="d-flex flex-column align-items-center">
            <h1 className="main-title">Warung Informatika</h1>
            <div className="icon-row d-flex mt-3">
              <img src="src/assets/Logo Jati Asta.png" alt="Logo Jati Asta" className="gambarBawahNavbar1 mx-2" />
              <img src="src/assets/Logo HMDTIF tanpa nama.png" alt="Logo HMDTIF" className="gambarBawahNavbar mx-2" />
              <img src="src/assets/Logo DTIF.png" alt="Logo DTIF" className="gambarBawahNavbar mx-2" />
            </div>
          </Col>
          <Col xs={12} md={6} className="description-container">
            <p className="description">
              Warung Informatika adalah sebuah program kerja departemen Bisnis Himpunan Mahasiswa Departemen Teknik Informatika. Warung Informatika menjual berbagai jenis jajanan dan minuman ringan.
            </p>
          </Col>
        </Row>
      </Container>
    </div>

    <Container className="DaftarMenu">
      <Row>
        <Col className="Judul">Daftar Menu</Col>
      </Row>
      <Row className="barisFilter">
        <Col xs="auto" className="filter">Filter :</Col>
        <Col xs="auto">
          <Button className="button">Makanan Khas Indonesia</Button>
          <Button className="button">Gurih</Button>
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
    </>
  );
}

export default DaftarMenu;