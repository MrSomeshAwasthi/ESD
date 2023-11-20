import React, { useEffect } from 'react';

const ProductModal = ({ product, closeModal, isOpen }) => {
    useEffect(() => {
        if (isOpen) {
            // Trigger modal display (Bootstrap method)
            const modalElement = document.getElementById(`productModal${product.id}`);
            const bootstrapModal = new window.bootstrap.Modal(modalElement);
            bootstrapModal.show();
        }
    }, [isOpen, product.id]);

    return (
        <div className="modal fade" id={`productModal${product.id}`} tabIndex="-1" aria-labelledby={`productModal${product.id}Label`} aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={`productModal${product.id}Label`}>{product.name} Details</h5>
                        <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={product.imageSrc} className="img-fluid" alt={product.name} />
                            </div>
                            <div className="col-md-6">
                                <h2>{product.name}</h2>
                                <p>Price: Rs.{product.price}</p>
                                <p>Description: {product.description}</p>
                                <div className="mb-3">
                                    <label htmlFor="sizeSelection" className="form-label">Select Size:</label>
                                    <select className="form-select" id="sizeSelection">
                                        {product.sizes.map((size) => (
                                            <option key={size} value={size}>{size}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mt-4">
                                    <h3>Ratings and Reviews</h3>
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="userRating" className="form-label">Your Rating:</label>
                                            <input type="number" className="form-control" id="userRating" min="1" max="5" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="userReview" className="form-label">Your Review:</label>
                                            <textarea className="form-control" id="userReview" rows="3"></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit Review</button>
                                    </form>
                                </div>
                                <div className="mt-4">
                                    <button className="btn btn-success">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
