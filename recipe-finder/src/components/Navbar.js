import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-white text-xl font-bold">
                    Recipe Finder
                </Link>
                {/* Navbar Links */}
                <div className="hidden md:flex space-x-8">
                <Link to="/" className="text-white hover:text-gray-200 transition duration-300">Home</Link>
                    <Link to="/about" className="text-white hover:text-gray-200 transition duration-300">About</Link>
                    <Link to="/contact" className="text-white hover:text-gray-200 transition duration-300">Contact</Link>
                    <Link to="/save" className="text-white hover:text-gray-200 transition duration-300">Save</Link>
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="text-white">
                        <i className="fa fa-bars"></i>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
