import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './BagianDaftarMenu.css'

function DaftarMenu() {
  return (
    <Container className="PilihanMenu">
      <Row className="Sidebar">
        <Col className="d-flex flex-column mb-4">
          <Button className="buttonSidebar mb-3">Semua</Button>
          <Button className="buttonSidebar mb-3">Makanan Berat</Button>
          <Button className="buttonSidebar mb-3">Makanan Ringan</Button>
          <Button className="buttonSidebar mb-3">Minuman</Button>
        </Col>

        <Col xs={9} md={9}>
          <Row>
            <Col xs={12} sm={6} md={4} className="mb-4 isiCard">
              <Card className='isiCard' style={{ width: '100%' }}>
                <Card.Img className='img' variant="top" src="src/assets/Kotak Putih Abu.png" />
                <Card.Body>
                  <Card.Title className='judulCard'>Nasi Goreng</Card.Title>
                  <Card.Text className='hargaCard'>
                    Rp15.000,00
                  </Card.Text>
                  <Card.Text className='penjelasanCard'>
                    Nasi goreng gurih manis khas Malang dengan topping telur orak arik dan sayuran
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={4} className="mb-4 isiCard">
              <Card className='isiCard' style={{ width: '100%' }}>
                <Card.Img className='img' variant="top" src="src/assets/Kotak Putih Abu.png" />
                <Card.Body>
                  <Card.Title className='judulCard'>Nasi Ayam Bakar</Card.Title>
                  <Card.Text className='hargaCard'>
                    Rp13.000,00
                  </Card.Text>
                  <Card.Text className='penjelasanCard'>
                    Nasi goreng gurih manis khas Malang dengan topping telur orak arik dan sayuran
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={4} className="mb-4 isiCard">
              <Card className='isiCard' style={{ width: '100%' }}>
                <Card.Img className='img' variant="top" src="src/assets/Kotak Putih Abu.png" />
                <Card.Body>
                  <Card.Title className='judulCard'>Nasi Ayam Geprek</Card.Title>
                  <Card.Text className='hargaCard'>
                    Rp12.000,00
                  </Card.Text>
                  <Card.Text className='penjelasanCard'>
                    Nasi yang dipadukan dengan ayam krispy yang digeprek dengan sambal pedas
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={4} className="mb-4 isiCard">
              <Card className='isiCard' style={{ width: '100%' }}>
                <Card.Img className='img' variant="top" src="src/assets/Kotak Putih Abu.png" />
                <Card.Body>
                  <Card.Title className='judulCard'>Nasi Padang Rendang</Card.Title>
                  <Card.Text className='hargaCard'>
                    Rp20.000,00
                  </Card.Text>
                  <Card.Text className='penjelasanCard'>
                    Nasi dengan kuah gurih pedas dengan daging rendang dan daun singkong
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default DaftarMenu;