import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import { Search, PencilLine, Check } from 'lucide-react';
import './Dashboard.css'

function MenuAdmin() {

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

  const [categories, setCategories] = useState(['Semua', 'Makanan Berat', 'Makanan Ringan', 'Minuman']);
  const [displayedMenus, setDisplayedMenus] = useState(Menu);
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [activeSort, setActiveSort] = useState('Default');
  const [searchText, setSearchText] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isEditingCategory, setIsEditingCategory] = useState(null); 
  const [newCategoryName, setNewCategoryName] = useState('');
  const [isEditingAddCategory, setIsEditingAddCategory] = useState(false);

  const filterAndSortMenus = (category, sort, search) => {
    let filteredMenus = Menu.filter((item) =>
      item.NamaMenu.toLowerCase().includes(search.toLowerCase())
    );

    if (category !== 'Semua') {
      filteredMenus = filteredMenus.filter((item) => item.Kategori === category);
    }

    if (sort === 'A-Z') {
      filteredMenus = filteredMenus.sort((a, b) => a.NamaMenu.localeCompare(b.NamaMenu));
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

  const handleEditCategory = (category) => {
    setIsEditingCategory(category);
    setNewCategoryName(category);
  };

  const handleSaveCategory = () => {
    if (newCategoryName.trim()) {
      const updatedCategories = categories.map((category) =>
        category === isEditingCategory ? newCategoryName : category
      );
      setCategories(updatedCategories);
      setIsEditingCategory(null); 
      setNewCategoryName(''); 
    }
  };

  const handleCategoryInputChange = (e) => {
    setNewCategoryName(e.target.value);
  };

  const handleBlurCategoryInput = () => {
    handleSaveCategory();
  };

  const handleAddCategory = () => {
    if (inputValue.trim() && !categories.includes(inputValue)) {
      setCategories([...categories, inputValue]); 
      setInputValue(''); 
      setIsEditingAddCategory(false); 
    }
  };

  return (
    <>
    <Container className="menu-list">
      <Row>
        <Col className="menu-list-title">Daftar Menu</Col>
      </Row>
      <Row className="baris-filter">
        <Col className="ms-auto d-flex align-items-center">
          <Button className={`button-default ms-2 ${activeSort === 'Default' ? 'active' : ''}`} onClick={handleSortDefault}>Default</Button>
          <Button className={`button-az ${activeSort === 'A-Z' ? 'active' : ''}`} onClick={handleSortAZ}>A - Z</Button>
        </Col>
        <Col xs="auto" className="ms-auto d-flex align-items-center">
          <div className="input-icon-wrapper-dashboard">
            <Search className="icon-inside-input-dashboard"/>
            <Form.Control type="text" placeholder="Ketik disini" className="search-bar" value={searchText} onChange={(e) => handleSearch(e.target.value)}/>
          </div>
        </Col>
      </Row>
    </Container>

    <Container className="pilihan-menu">
      <Row className="section-sidebar">
        <Col className="d-flex flex-column mb-4">
        {categories.map((category) => (
              <div key={category} className="d-flex justify-content-between align-items-center">
              {isEditingCategory === category ? (
                  <Form.Control
                  type="text"
                  className="button-sidebar mb-3"
                  value={newCategoryName}
                  onChange={handleCategoryInputChange}
                  onBlur={handleBlurCategoryInput}
                  onKeyUp={(e) => e.key === 'Enter' && handleSaveCategory()}
                />
              ) : (
                <Button
                  className={`button-sidebar mb-3 ${activeCategory === category && isEditingCategory !== category ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                  <span
                    className="edit-icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      isEditingCategory === category ? handleSaveCategory() : handleEditCategory(category);
                    }}
                  >
                    {isEditingCategory === category ? (
                      <Check className="edit-icon" />
                    ) : (
                      <PencilLine className="edit-icon" />
                    )}
                  </span>
                </Button>
              )}
            </div>
          ))}
            {isEditingAddCategory ? (
              <Form.Control
                type="text"
                className="button-sidebar mb-3"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={handleAddCategory} 
                onKeyUp={(e) => e.key === 'Enter' && handleAddCategory()} 
              />
            ) : (
              <Button
                className="button-sidebar"
                onClick={() => setIsEditingAddCategory(true)} 
              >
                + Tambah Kategori Baru
              </Button>
            )}
          </Col>
        <Col xs={9} md={9}>
          <Row>
            <Col xs={12} sm={6} md={4} className="mb-4 section-card-dashboard">
              <Link to={"https://modul-stafmud.vercel.app/docs/introduction.html"}>
                <Card className='section-card-dashboard section-card-plus'>
                  <Card.Title className='card-plus'>+</Card.Title>   
                  <Card.Text className='card-plus-text'>Tambah Menu Baru</Card.Text>           
                </Card>
              </Link>
            </Col>
            {displayedMenus.map((item, index) => (
              <Col key={index} xs={12} sm={6} md={4} className="mb-4 section-card-dashboard">
                <Link to={"https://modul-stafmud.vercel.app/docs/introduction.html"}>
                  <Card className='section-card-dashboard' onClick={() => handleCardClick(index)}>
                    {item.Gambar && (
                      <Card.Img className='img-card' variant="top" src={item.Gambar} />
                    )}
                    <Card.Body>
                      <Card.Title className='card-title'>{item.NamaMenu}</Card.Title>
                      <Card.Text className='card-price'>{item.Harga}</Card.Text>
                      <Card.Text className='card-description'> {item.Deskripsi.split(' ').length > 12 ? `${item.Deskripsi.split(' ').slice(0, 12).join(' ')}...` : item.Deskripsi}</Card.Text>
                      <Card.Text className='card-edit-text'>Klik Untuk Mengedit</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
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

export default MenuAdmin;