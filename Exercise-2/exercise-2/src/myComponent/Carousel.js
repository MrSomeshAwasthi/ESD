import React from 'react';
import imagesData from './carousel.json';

export default function Carousel() {
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {imagesData.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="10000">
                        <img src={image.src} className="d-block w-100" alt={image.alt} />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
