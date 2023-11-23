import React, { useState } from 'react';
import ProductModal from './ProductModal';

const Product = ({ productsData }) => {

  console.log(productsData)
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  
  return (
    
    <main className="container">
      {productsData[0]=="Loading"?<div>loading</div>:
      <div className="row">
        {productsData.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card" style={{ border: '1px solid #000' }}>
              <img
                src={product.imageSrc}
                className="card-img-top"
                alt={product.name}
                style={{
                  height: '250px',
                  objectFit: 'contain',
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Material: {product.material}</p>
                <p className="card-text">Color: {product.color}</p>
                <p className="card-text">Size: Available in {product.sizes.join(', ')}</p>
                <p className="card-text">Price: Rs.{product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => openModal(product)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      }
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          closeModal={closeModal}
          isOpen={!!selectedProduct}
        />
      )}
    </main>
  );
};

export default Product;
