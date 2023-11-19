import React from 'react';
import BestsellersData from './bestsellers.json';
import Product from './Product';
import { Link } from "react-router-dom";


const Bestseller = () => {
  return (
    <>
      <h1 className="text-center mt-4 mb-4">Bestseller</h1>
      <Product productsData={BestsellersData} />
      <div className="d-flex justify-content-center">
        <Link className="btn btn-primary" to="/Allproducts">
          Show More
        </Link>
      </div>
    </>
  );
};

export default Bestseller;
