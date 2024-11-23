import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './BagianDaftarMenu.css'
import { Search } from 'lucide-react';

function DaftarMenu() {

  const Menu = [
    {
      NamaMenu : 'Nasi Goreng',
      Harga : 'Rp15.000,00',
      Gambar : '/src/assets/kotak-putih-abu.png',
      Deskripsi : 'Nasi goreng gurih manis khas Malang dengan topping telur orak arik dan sayuran',
      Kategori: 'Makanan Berat',
    },  
    {
      NamaMenu : 'Nasi Ayam Bakar',
      Harga : 'Rp13.000,00',
      Gambar : '/src/assets/kotak-putih-abu.png',
      Deskripsi : 'Nasi yang dipadukan dengan ayam bakar kecap gurih manis dan sayuran',
      Kategori: 'Makanan Berat',
    },
    {
      NamaMenu : 'Nasi Ayam Geprek',
      Harga : 'Rp12.000,00',
      Gambar : '/src/assets/kotak-putih-abu.png',
      Deskripsi : 'Nasi yang dipadukan dengan ayam krispy yang digeprek dengan sambal pedas',
      Kategori: 'Minuman',
    },
    {
      NamaMenu : 'Nasi Padang Rendang',
      Harga : 'Rp20.000,00',
      Gambar : '/src/assets/kotak-putih-abu.png',
      Deskripsi : 'Nasi dengan kuah gurih pedas dengan daging rendang dan daun singkong',
      Kategori: 'Makanan Ringan',
    },
  ];

  const categories = ['Semua', 'Makanan Berat', 'Makanan Ringan', 'Minuman'];

  const [displayedMenus, setDisplayedMenus] = useState(Menu);
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [activeSort, setActiveSort] = useState('Default');
  const [activeCard, setActiveCard] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);

    let filteredMenus = Menu;
    if (category !== 'Semua') {
      filteredMenus = Menu.filter((item) => item.Kategori === category);
    }
  
    if (activeSort === 'A-Z') {
      filteredMenus = [...filteredMenus].sort((a, b) => a.NamaMenu.localeCompare(b.NamaMenu));
    }
    setDisplayedMenus(filteredMenus);
  };

  const handleSortDefault = () => {
    setActiveSort('Default');

    const filteredMenus =
    activeCategory === 'Semua'
      ? Menu
      : Menu.filter((item) => item.Kategori === activeCategory);

  setDisplayedMenus(filteredMenus);
};

  const handleSortAZ = () => {
    setActiveSort('A-Z');

  const filteredMenus =
    activeCategory === 'Semua'
      ? Menu
      : Menu.filter((item) => item.Kategori === activeCategory);

  const sorted = [...filteredMenus].sort((a, b) => a.NamaMenu.localeCompare(b.NamaMenu));
  setDisplayedMenus(sorted);
};

  const handleSearch = (searchText) => {
    const filtered = Menu.filter((item) =>
      item.NamaMenu.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayedMenus(filtered);
    setActiveSort(''); 
    setActiveCategory('Semua'); 
  };

  const handleCardClick = (index) => {
    console.log('Clicked Card Index:', index); 
    console.log('Previous Active Card:', activeCard); 
    setActiveCard(index === activeCard ? null : index); 
  };  
  {console.log('Active Card State:', activeCard)}


  return (
    <>
    <Container className="daftar-menu">
      <Row>
        <Col className="judul-daftar-menu">Daftar Menu</Col>
      </Row>
      <Row className="baris-filter">
        <Col className="ms-auto d-flex align-items-center">
          <Button className={`button-default ms-2 ${activeSort === 'Default' ? 'active' : ''}`} onClick={handleSortDefault}>Default</Button>
          <Button className={`button-az ${activeSort === 'A-Z' ? 'active' : ''}`} onClick={handleSortAZ}>A - Z</Button>
        </Col>
        <Col xs="auto" className="ms-auto d-flex align-items-center">
          <div className="input-icon-wrapper">
            <Search className="icon-inside-input"/>
            <Form.Control type="text" placeholder="Ketik disini" className="search" onChange={(e) => handleSearch(e.target.value)}/>
          </div>
        </Col>
      </Row>
    </Container>

    <Container className="pilihan-menu">
      <Row className="section-sidebar">
        <Col className="d-flex flex-column mb-4">
        {categories.map((category) => (
        <Button
          key={category}
          className={`button-sidebar mb-3 ${activeCategory === category ? 'active' : ''}`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </Button>
        ))}
        </Col>
        <Col xs={9} md={9}>
          <Row>
            {displayedMenus.map((item, index) => (
              <Col key={index} xs={12} sm={6} md={4} className="mb-4 section-card">
                <Card className='section-card' onClick={() => handleCardClick(index)} style={{ cursor: 'pointer', width: '100%' }}>
                  {item.Gambar && (
                    <Card.Img className='img-card' variant="top" src={item.Gambar} />
                  )}
                  <Card.Body>
                    <Card.Title className='card-title'>{item.NamaMenu}</Card.Title>
                    <Card.Text className='card-price'>{item.Harga}</Card.Text>
                    <Card.Text className='card-description'>  {activeCard === index ? item.Deskripsi : item.Deskripsi.split(' ').length > 12 ? `${item.Deskripsi.split(' ').slice(0, 12).join(' ')}...` : item.Deskripsi}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>

    {/* Footer */}
    <div className='footer'>
      <p >Copyright © Staff Muda PIT 2024 | All Rights Reserved</p>
    </div>
  </>
  );
}

export default DaftarMenu;