import React from 'react'
import AllproductData from './allproduct.json';
import Product from './Product';

function Allproduct() {
  return (
    <>
      <h1 className="text-center mt-4 mb-4">Our Products</h1>
      <Product productsData={AllproductData} />
    </>
  )
}

export default Allproduct