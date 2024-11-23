import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BagianDaftarMenu.css'


function DaftarMenu() {
  return (
    <div className="section-judul">
      <Container fluid className="bottom-section py-3">
        <Row className="w-100 align-items-center">
          <Col xs={12} md={5} className="d-flex flex-column align-items-center">
            <h1 className="main-title">Warung Informatika</h1>
            <div className="semua-gambar d-flex mt-3">
              <img src="src/assets/Logo Jati Asta.png" alt="Logo Jati Asta" className="gambar-bawah-navbar1 mx-2" />
              <img src="src/assets/Logo HMDTIF tanpa nama.png" alt="Logo HMDTIF" className="gambar-bawah-navbar2 mx-2" />
              <img src="src/assets/Logo DTIF.png" alt="Logo DTIF" className="gambar-bawah-navbar3 mx-2" />
            </div>
          </Col>
          <Col xs={12} md={7}>
            <p className="description">
              Warung Informatika adalah sebuah program kerja departemen Bisnis Himpunan Mahasiswa Departemen Teknik Informatika. Warung Informatika menjual berbagai jenis jajanan dan minuman ringan.
            </p>
          </Col>
        </Row>
      </Container>
    </div>  
  );
}

export default DaftarMenu;