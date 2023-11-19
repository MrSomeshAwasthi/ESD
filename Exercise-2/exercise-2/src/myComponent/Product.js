import React from 'react';

const Product = ({ productsData }) => {
  return (
    <main className="container">
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
                  data-bs-toggle="modal"
                  data-bs-target={`#productModal${product.id}`}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Product;
