/**
 * @module Footer.jsx
 * @description Footer of website.
 */

import React from 'react';

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <div>
            <p>Copyright © {year}</p>
        </div>
    );
};

export default Footer;