import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                
                    <img 
                        src="https://i.pinimg.com/originals/e4/6b/e6/e46be6459dc4d30cc535b68331d8b6e7.jpg" // Replace with the path to your logo image
                        alt="Recipe Finder Logo" 
                        className="h-12 w-auto" // Adjust size as needed
                    /> 
                    <h3 className="text-black">Recipe Finder</h3>
                </Link>
                {/* Navbar Links */}
                <div className="hidden md:flex space-x-8">
                    <Link to="/home" className="text-black hover:text-blue-500 transition duration-300">Home</Link>
                    <Link to="/about" className="text-black hover:text-blue-500 transition duration-300">About</Link>
                    <Link to="/contact" className="text-black hover:text-blue-500 transition duration-300">Contact</Link>
                    <Link to="/newsletter" className="text-black hover:text-blue-500 transition duration-300">Newsletter</Link>
                    <Link to="/savepage" className="text-black hover:text-blue-500 transition duration-300">Favorite</Link>
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="text-black" onClick={toggleMenu}>
                        <i className="fa fa-bars"></i>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 space-y-4">
                    <Link to="/home" className="block text-black hover:text-blue-500 transition duration-300">Home</Link>
                    <Link to="/about" className="block text-black hover:text-blue-500 transition duration-300">About</Link>
                    <Link to="/contact" className="block text-black hover:text-blue-500 transition duration-300">Contact</Link>
                    <Link to="/newsletter" className="block text-black hover:text-blue-500 transition duration-300">Newsletter</Link>
                    <Link to="/save" className="block text-black hover:text-blue-500 transition duration-300">Favorite</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
