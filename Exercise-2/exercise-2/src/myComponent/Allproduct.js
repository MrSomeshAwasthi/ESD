import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';

function Allproduct() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the URL for your API endpoint
    const apiUrl = 'http://localhost:3001/products';

    // Make a GET request using Axios
    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <h1 className="text-center mt-4 mb-4">Our Products</h1>
      <Product productsData={loading?["Loading"]:data} />
    </>
  );
}

export default Allproduct;
