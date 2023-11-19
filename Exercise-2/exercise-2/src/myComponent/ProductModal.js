import React from 'react';

const ProductModal = ({ product }) => {
    return (
        <div className="modal fade" id={`productModal${product.id}`} tabIndex="-1" aria-labelledby={`productModal${product.id}Label`} aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={`productModal${product.id}Label`}>{product.name} Details</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
