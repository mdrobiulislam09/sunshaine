import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='m-5'>
            <footer class="bg-dark py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-5 col-xl-4 me-auto mb-5 mb-lg-0">
                            <span class="footer-logo h2 text-primary mb-0 font-w-7" href="index.html">
                                W<span class="text-white font-w-4">inck.</span>
                            </span>
                            <p class="my-3 text-light">Winck - Bootstrap 5 Multipurpose Landing Page Is fully responsible, Build whatever you like with the Winck.</p>
                        </div>
                        <div class="col-12 col-lg-6 col-xl-7">
                            <div class="row">
                                <div class="col-12 col-sm-4">
                                    <h5 class="mb-4 text-white">Pages</h5>
                                    <ul class="list-unstyled mb-0">
                                        <li class="mb-3"><a class="list-group-item-action text-light" href="about-us-1.html">About</a>
                                        </li>
                                        <li class="mb-3"><a class="list-group-item-action text-light" href="product-grid.html">Shop</a>
                                        </li>
                                        <li class="mb-3"><a class="list-group-item-action text-light" href="faq.html">Faq</a>
                                        </li>
                                        <li><a class="list-group-item-action text-light" href="contact-us.html">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 col-sm-4 mt-6 mt-sm-0">
                                    <h5 class="mb-4 text-white">Service</h5>
                                    <ul class="list-unstyled mb-0">
                                        <li class="mb-3"><a class="list-group-item-action text-light" href="#">Content Writing</a>
                                        </li>
                                        <li class="mb-3"><a class="list-group-item-action text-light" href="#">Documentation</a>
                                        </li>
                                        <li class="mb-3"><a class="list-group-item-action text-light" href="login.html">Account</a>
                                        </li>
                                        <li><a class="list-group-item-action text-light" href="career.html">Careers</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 col-sm-4 mt-6 mt-sm-0">
                                    <h5 class="mb-4 text-white">Our Address</h5>
                                    <div class="mb-3">
                                        <p class="mb-0 text-light">423B, Road Wordwide Country, USA</p>
                                    </div>
                                    <div class="mb-3">
                                        <a class="btn-link text-light" href="mailto:themeht23@gmail.com"> themeht23@gmail.com</a>
                                    </div>
                                    <div>
                                        <a class="btn-link text-light" href="tel:+912345678900">+91-234-567-8900</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row my-5">
                        <div class="col"><hr class="m-0" /></div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-md-6 text-light">
                            Copyright ©2020 All rights reserved | Winck is made by <i class="lar la-heart text-primary heartBeat2"></i>  <u><a class="text-primary" href="#">ThemeHt</a></u></div>
                        <div class="col-md-6 text-md-end mt-3 mt-md-0">
                            <ul class="list-inline mb-0">
                                <li class="me-3 list-inline-item">
                                    <Link to='/' class="list-group-item-action text-light">Term Of Service</Link> 
                                </li>
                                <li class="me-3 list-inline-item"> <a class="list-group-item-action text-light" href="#">
                                    Privacy Policy
                                </a>
                                </li>
                                <li class="list-inline-item"> <a class="list-group-item-action text-light" href="#">
                                    Support
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;