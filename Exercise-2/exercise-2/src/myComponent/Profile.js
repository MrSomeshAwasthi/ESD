import React, { useState, useEffect } from 'react';
import ProfileData from './Profile.json';

const ProfileComponent = () => {
  const [recentOrdersData, setRecentOrdersData] = useState([]);

  useEffect(() => {
    // Set data from the imported JSON file
    setRecentOrdersData(ProfileData);
  }, []);

  return (
    <>
      <style>
        {`
          body {
            background: linear-gradient(90deg, #FCE38A 0%, #FCE38A 33%, #EAFFD0 33%, #EAFFD0 66%, #95E1D3 66%, #95E1D3 100%);
            border-radius: 20px;
          }

          .card {
            height: 252px;
            border: 1px solid #000000;
            border-radius: 10px;
          }

          .card-img-top {
            height: 250px;
            object-fit: contain;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }

          .card-body {
            padding: 20px;
          }

          .card-title {
            font-size: 2rem;
            margin-bottom: 10px;
          }

          .card-text {
            color: #3d3939;
          }
        `}
      </style>

      <main className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <img src="user.jpg" alt="Profile Image" className="img-fluid rounded-circle mb-3" />
          </div>
          <div className="col-md-8" style={{ paddingTop: '90px', paddingLeft: '330px' }}>
            {/* Person Details */}
            <h2>SOMESH AWASTHI</h2>
            <p>Email: someshawasthi6@gmail.com</p>
            <p>Location: 3b4, guesture</p>
            <p style={{ padding: '2px' }}> electronic city, bangaluru</p>
          </div>
        </div>

        <hr className="my-4" />

        {/* Recent Orders */}
        <h3>Recent Orders</h3>
        <div className="best-seller-wrapper d-flex justify-content-between">
          {recentOrdersData.map((order) => (
            <div key={order.id} className="card" style={{ width: '18rem', border: '1px solid #000000', borderRadius: '10px', margin: '20px' }}>
              <img
                src={order.src}
                alt={order.alt}
                className="card-img-top"
                style={{
                  height: '250px',
                  objectFit: 'contain',
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                }}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default ProfileComponent;
