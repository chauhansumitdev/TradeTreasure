import React, { useState } from 'react';
import './Sell.css'

const Sell = () => {
  const [productDetails, setProductDetails] = useState({
    productName: '',
    description: '',
    price: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      const file = e.target.files[0];
      setProductDetails((prevDetails) => ({
        ...prevDetails,
        [name]: file,
      }));
    } else {
      setProductDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  const handleSell = () => {
    console.log('Product Details:', productDetails);

    setProductDetails({
      productName: '',
      description: '',
      price: '',
      image: null,
    });
  };

  return (
    <div className='message'>
      <h3>Sell Your Product</h3>
      <form className='sellerform'>
        <label>
          <strong>Product Name:</strong>
          <input
            type="text"
            name="productName"
            value={productDetails.productName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <strong>Description:</strong>
          <textarea
            name="description"
            value={productDetails.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <strong>Price:</strong>
          <input
            type="text"
            name="price"
            value={productDetails.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <strong>Image:</strong>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleSell} className='fullwidthbutton'>
          <strong>Sell Product</strong>
        </button>
      </form>
    </div>
  );
};

export default Sell;
