// components/Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white text-center p-6 mt-8">
            {/* Footer Text */}
            <p className="text-lg font-semibold">
                &copy; {new Date().getFullYear()} Recipe Finder. All Rights Reserved.
            </p>

            {/* Navigation Links */}
            <div className="mt-4">
                <a 
                    href="/about" 
                    className="text-blue-400 hover:underline mx-2 transition duration-300"
                >
                    About Us
                </a>
                <span className="text-gray-400">|</span>
                <a 
                    href="/contact" 
                    className="text-blue-400 hover:underline mx-2 transition duration-300"
                >
                    Contact
                </a>
            </div>

            {/* Social Media Links Section */}
            <div className="flex justify-center space-x-6 mt-6">
                <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-blue-500 transition duration-300 text-2xl"
                >
                    <FaFacebook />
                </a>
                <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-pink-500 transition duration-300 text-2xl"
                >
                    <FaInstagram />
                </a>
                <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-blue-400 transition duration-300 text-2xl"
                >
                    <FaTwitter />
                </a>
                <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-blue-600 transition duration-300 text-2xl"
                >
                    <FaLinkedin />
                </a>
            </div>

            
        </footer>
    );
}

export default Footer;
