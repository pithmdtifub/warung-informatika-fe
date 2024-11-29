import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import './BagianDaftarMenu.css'
import { Search } from 'lucide-react';
import defaultImage from '/src/assets/kotak-putih-abu.png';

function DaftarMenu() {

  const categories = ['Semua', 'Makanan Berat', 'Makanan Ringan', 'Minuman'];

  const [menus, setMenus] = useState([]);
  const [displayedMenus, setDisplayedMenus] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [activeSort, setActiveSort] = useState('Default');
  const [activeCard, setActiveCard] = useState(null);
  const [searchText, setSearchText] = useState(""); 

  const fetchMenus = async () => {
    try {
      const response = await fetch("https://warung-informatika-be.vercel.app/api/v1/menus");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
  
      
      if (result && result.data) {
        setMenus(result.data); 
        setDisplayedMenus(result.data);
      } else {
        console.error("Unexpected API response format:", result);
      }
    } catch (error) {
      console.error("Error fetching menus:", error);
    }
  };

  useEffect(() => {
    console.log("Menus:", menus);
    console.log("Displayed Menus:", displayedMenus);
  }, [menus, displayedMenus]);

  useEffect(() => {
    fetchMenus();
  }, []);

  const filterAndSortMenus = (category, sort, search) => {
    let filteredMenus = menus.filter((menu) =>
      menu.name.toLowerCase().includes(search.toLowerCase())
    );
    
    if (category !== "Semua") {
      filteredMenus = filteredMenus.filter((menu) => menu.category === category);
    }
    
    if (sort === "A-Z") {
      filteredMenus = [...filteredMenus].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return filteredMenus;
  };

  const handleSearch = (text) => {
    setSearchText(text);
    const filteredMenus = filterAndSortMenus(activeCategory, activeSort, text);
    setDisplayedMenus(filteredMenus);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const filteredMenus = filterAndSortMenus(category, activeSort, searchText);
    setDisplayedMenus(filteredMenus);
  };

  const handleSortDefault = () => {
    setActiveSort('Default');
    const filteredMenus = filterAndSortMenus(activeCategory, 'Default', searchText);
    setDisplayedMenus(filteredMenus);
  };

  const handleSortAZ = () => {
    setActiveSort('A-Z');
    const filteredMenus = filterAndSortMenus(activeCategory, 'A-Z', searchText);
    setDisplayedMenus(filteredMenus);
  };


  const handleCardClick = (index) => {
    console.log('Clicked Card Index:', index); 
    console.log('Previous Active Card:', activeCard); 
    if (index >= 0 && index < displayedMenus.length) {
      setActiveCard(index === activeCard ? null : index); 
    } 
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
            <Form.Control type="text" placeholder="Ketik disini" className="search" value={searchText} onChange={(e) => handleSearch(e.target.value)}/>
          </div>
        </Col>
      </Row>
    </Container>

    <Container className="pilihan-menu">
      <Row className="section-sidebar">
        <Col className="d-flex flex-column mb-4">
        {categories.map((category) => (
        <Button key={category} className={`button-sidebar mb-3 ${activeCategory === category ? 'active' : ''}`} onClick={() => handleCategoryClick(category)}>{category}</Button>
        ))}
        </Col>
        <Col xs={9} md={9}>
          <Row>
            {displayedMenus.map((item, index) => (
              <Col key={item.id} xs={12} sm={6} md={4} className="mb-4 section-card">
                <Card className='section-card' onClick={() => handleCardClick(index)} style={{ cursor: 'pointer', width: '100%' }}>
                  {item.image && (
                    <Card.Img className='img-card' variant="top" src={item.image || defaultImage}/>
                  )}
                  <Card.Body>
                    <Card.Title className='card-title'>{item.name}</Card.Title>
                    <Card.Text className='card-price'>Rp{item.price.toLocaleString("id-ID")}{" "}</Card.Text>
                    <Card.Text className='card-description'>  {activeCard === index ? item.description : item.description.length > 70 ? `${item.description.substring(0, 70)}...` : item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>

    <div className='footer'>
      <p >Copyright © Staff Muda PIT 2024 | All Rights Reserved</p>
    </div>
  </>
  );
}

export default DaftarMenu;