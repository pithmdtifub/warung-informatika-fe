import React, { useState, useRef } from 'react';
import './AddMenu.css'


function AddMenuForm() {
    const [menuName, setMenuName] = useState('');
    const [menuPrice, setMenuPrice] = useState('');
    const [menuCategory, setMenuCategory] = useState('');
    const [menuDescription, setMenuDescription] = useState('');
    const [menuImage, setMenuImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('src/assets/kotak-putih-abu.png'); // State for image preview
    const fileInputRef = useRef(null); // Reference for the hidden file input

    const isActive = (category) => {
      console.log("category >>",category);
      console.log("menu category >>",menuCategory);
      
      return category === menuCategory ? 'is-active' : '';
    };
  
    const handleNameChange = (event) => {
      setMenuName(event.target.value);
    };
  
    const handlePriceChange = (event) => {
      setMenuPrice(event.target.value);
    };
  
    const handleCategoryChange = (event) => {
      console.log(event.target.value)
      setMenuCategory(event.target.value);
    };
  
    const handleDescriptionChange = (event) => {
      setMenuDescription(event.target.value);
    };
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setMenuImage(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result); // Set the image preview
        };
        reader.readAsDataURL(file); // Read the file as a data URL
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Menu data:', {
        menuName,
        menuPrice,
        menuCategory,
        menuDescription,
        menuImage,
      });
  
      // Reset the form after submission
      setMenuName('');
      setMenuPrice('');
      setMenuCategory('');
      setMenuDescription('');
      setMenuImage(null);
      setImagePreview(null); // Reset image preview
    };
  
    const handleImageClick = () => {
      fileInputRef.current.click(); // Programmatically click the hidden file input
    };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Tambah Menu</h2>
      <div className='section'>
        <label htmlFor="menu">Nama Menu</label>
        <br></br>
        <input
          type="text"
          id="menuName"
          value={menuName}
          onChange={handleNameChange}
          required
          placeholder="  Ketik disini"
        />
      </div>
      <div className='section'>
        <label htmlFor="menu">Harga Menu</label>
        <br></br>
        <input
          type="text"
          id="menuPrice"
          value={menuPrice}
          onChange={handlePriceChange}
          required
          placeholder="  Ketik disini"
        />
      </div>
      <div className='section'>
        <label htmlFor="menu">Kategori</label>
        <div className='inline'>
        <button
          value="Makanan Berat"
          onClick={(e) => handleCategoryChange(e)}
          className={`category-button ${isActive('Makanan Berat')}`}
          type="button"
        >
        Makanan Berat
        </button>
        <button
          value="Makanan Ringan"
          onClick={(e) => handleCategoryChange(e)}
          className={`category-button ${isActive('Makanan Ringan')}`}
          type="button"
        >
        Makanan Ringan
        </button>
        <button
          value="Minuman"
          onClick={(e) => handleCategoryChange(e)}
          className={`category-button ${isActive('Minuman')}`}
          type="button"
        >
        Minuman
        </button>
          {/* <label>
            <button
              className='kategori'
              id="submit"
              type="submit"
              value="Makanan Berat"
              checked={menuCategory === 'Makanan Berat'}
              onChange={handleCategoryChange}
              required
            />
          </label>
          <label>
            <button
            className='kategori'
              id="submit"
              type="submit"
              value="Makanan Ringan"
              checked={menuCategory === 'Makanan Ringan'}
              onChange={handleCategoryChange}
              required
            />
          </label>
          <label>
            <button
            className='kategori'
              id="submit"
              type="submit"
              value="Minuman"
              checked={menuCategory === 'Minuman'}
              onChange={handleCategoryChange}
              required
            />
          </label> */}
        </div>
      </div>
      <div className='section'>
        <label htmlFor="menu">Deskripsi Menu</label>
        <br></br>
        <input
          type="text"
          id="menuDescription"
          value={menuDescription}
          onChange={handleDescriptionChange}
          required
          placeholder="  Ketik disini"
        />
      </div>
      <div>
        <label htmlFor="menu">Gambar Menu</label>
        <br></br>
        <input
          type="file"
          id="menuImage"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          style={{ display: 'none' }} // Hide the file input
        />
        <img
          src={imagePreview} // Default image or preview
          onClick={handleImageClick}
          style={{ cursor: 'pointer', width: '260px', height: '187px', borderRadius: '15px', margin:'15px 0px 15px 0px'}} // Style the image
        />
      </div>
      <button type="submit" className='green'>Simpan</button>
      <button type="button" className='red' onClick={() => {
        setMenuName('');
        setMenuPrice('');
        setMenuCategory('');
        setMenuDescription('');
        setMenuImage(null);
      }}>Batalkan</button>
    </form>
  );
}

export default AddMenuForm;