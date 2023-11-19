import React from 'react';
import BestsellersData from './bestsellers.json';
import Product from './Product';

const Bestseller = () => {
  return (
    <>
      <h1 className="text-center mt-4 mb-4">Bestseller</h1>
      <Product productsData={BestsellersData} />
      {/* <Link to="/products" className="btn btn-primary">
          Show More
        </Link> */}
    </>
  );
};

export default Bestseller;
