import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='company-info'>
                    <h2>Job hiring</h2>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src="/public/comany-logo.png" alt="" />
                </div>
                <div className='company'>
                    <h4>Company</h4>
                    <p>About Us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>
                <div className='company'>
                    <h4>Product</h4>
                    <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                </div>
                <div className='company'>
                    <h4>Support</h4>
                    <p>Help Desk</p>
                    <p>Sales</p>
                    <p>Become a Partner</p>
                    <p>Developers</p>
                </div>
                <div className='company'>
                    <h4>Contact</h4>
                    <p>+1 777 - 978 - 5570</p>
                    <p>524 Broadway , NYC</p>
                </div>
            </div>
            <hr />
            <div className='author-footer'>
                <p>@2023 CareerHub. All Rights Reserved</p>
                <p>Powered by CareerHub</p>
            </div>
        </div>
    );
};

export default Footer;