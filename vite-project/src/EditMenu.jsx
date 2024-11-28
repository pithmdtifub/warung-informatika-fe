import React, { useState, useRef } from 'react';
import "./EditMenu.css"

function EditMenu() {
  const fileInputRef = useRef(null);

  const initialMenuData = {
    name: 'Nasi Goreng',
    price: 15000,
    category: 'Makanan Berat',
    description: 'Nasi goreng gurih manis khas Malang dengan topping telur orek dan sayuran',
    image: 'src/assets/kotak-putih-abu.png', // Placeholder for image URL or file data
  };

  const [menuData, setMenuData] = useState(initialMenuData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMenuData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would send the updated menuData to your backend API for saving
    console.log('Updated Menu Data:', menuData);
  };

  const handleImageClick = () => {
    fileInputRef.current.click(); // Programmatically click the hidden file input
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a URL for the selected file
      setMenuData((prevData) => ({ ...prevData, image: imageUrl })); // Update the image in state
    }
  };

  const handleReset = () => {
    setMenuData(initialMenuData); // Reset to initial values
  };

  return (
    <div>
      <h2>Edit Menu</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nama Menu</label>
          <br></br>
          <input
            type="text"
            id="name"
            name="name"
            value={"  "+menuData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Harga Menu</label>
          <br></br>
          <input
            type="text"
            id="price"
            name="price"
            value={"  "+menuData.price}
            onChange={handleChange}
          />
        </div>
          <label htmlFor="category">Kategori</label>
          <br></br>
          <div className='inline'>
            <button
              className={`category-button ${menuData.category === 'Makanan Berat' ? 'active' : ''}`}
              onClick={() => setMenuData((prevData) => ({ ...prevData, category: 'Makanan Berat' }))}
              type="button"
            >
              Makanan Berat
            </button>
            <button
              className={`category-button ${menuData.category === 'Makanan Ringan' ? 'active' : ''}`}
              onClick={() => setMenuData((prevData) => ({ ...prevData, category: 'Makanan Ringan' }))}
              type="button"
            >
              Makanan Ringan
            </button>
            <button
              className={`category-button ${menuData.category === 'Minuman' ? 'active' : ''}`}
              onClick={() => setMenuData((prevData) => ({ ...prevData, category: 'Minuman' }))}
              type="button"
            >
              Minuman
            </button>
          </div>
          <div className='section'>
            <label htmlFor="menu">Deskripsi Menu</label>
            <br></br>
            <input
              type="text"
              id="menuDescription"
              name="description"
              value={"  "+menuData.description}
              onChange={handleChange}
            />
          </div>
        <div>
          <label htmlFor="image">Gambar Menu</label>
          <br></br>
          <input
            type="file"
            id="menuImage"
            accept="image/*"
            style={{ display: 'none' }}
            name="image"
            ref={fileInputRef}
            // value={menuData.image}
            onChange={handleImageChange}
          />
          <img
          src={menuData.image} // Default image or preview
          onClick={handleImageClick}
          style={{ cursor: 'pointer', width: '260px', height: '187px', borderRadius: '15px', margin:'15px 0px 15px 0px'}} // Style the image
        />
        </div>
        <button type="submit" className='green'>Simpan Perubahan</button>
      <button type="button" className='red' onClick={handleReset}>Batalkan Perubahan</button>
      </form>
    </div>
  );
}

export default EditMenu;