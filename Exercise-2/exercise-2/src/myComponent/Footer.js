import React from 'react'

export default function Footer() {
    return (
        <footer className=" text-center" style={{ backgroundColor: '#EAFFD0' }}>
            <div className="container p-4 pb-0" >
                <section className="mb-4"  >
                    {/* Facebook */}
                    <a className="btn btn-outline-dark btn-floating m-1" href="https://www.facebook.com/" role="button" >
                        <img src="https://cdn-icons-png.flaticon.com/128/2168/2168281.png" alt="facebook" width="30px" height="30px" />
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    {/* Twitter */}
                    <a className="btn btn-outline-dark btn-floating m-1" href="https://twitter.com/" role="button">
                    <img src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="twitter" width="30px" height="30px" />
                        
                        <i className="fab fa-twitter"></i>
                    </a>

                    {/* Google */}
                    <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                        <img src="https://cdn-icons-png.flaticon.com/128/10110/10110386.png" alt="google" width="30px" height="30px" />
                        <i className="fab fa-google"></i>
                    </a>

                    {/* Instagram */}
                    <a className="btn btn-outline-dark btn-floating m-1" href="https://www.instagram.com/" role="button">
                    <img src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png" alt="instagram" width="30px" height="30px" />
                        <i className="fab fa-instagram"></i>
                    </a>

                    {/* Linkedin */}
                    <a className="btn btn-outline-dark btn-floating m-1" href="https://in.linkedin.com/" role="button">
                    <img src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" alt="linkdin" width="30px" height="30px" />
                        <i className="fab fa-linkedin-in"></i>
                    </a>

                    {/* Github */}
                    <a className="btn btn-outline-dark btn-floating m-1" href="https://github.com/login" role="button">
                    <img src="https://cdn-icons-png.flaticon.com/128/733/733609.png" alt="github" width="30px" height="30px" />
                        <i className="fab fa-github"></i>
                    </a>
                </section>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: '#95E1D3' }}>
                © 2023-2024 USDSHOP. All Rights Reserved.
                <a className="text-black" href="index.html">
                    USDSHOP
                </a>
            </div>
        </footer>
    );
}