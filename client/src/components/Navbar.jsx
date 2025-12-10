import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white py-4 shadow-sm">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">R</div>
                    <span className="text-xl font-bold text-gray-800">Real Trust</span>
                </div>

                {/* Links */}
                <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
                    <Link to="/" className="hover:text-blue-500 uppercase">Home</Link>
                    <a href="#services" className="hover:text-blue-500 uppercase">Services</a>
                    <a href="#projects" className="hover:text-blue-500 uppercase">Projects</a>
                    <a href="#testimonials" className="hover:text-blue-500 uppercase">Testimonials</a>
                    <a href="#contact" className="hover:text-blue-500 uppercase">Contact</a>
                    <Link to="/admin" className="text-blue-600 font-bold uppercase transition hover:text-blue-800">Admin</Link>
                </div>

                {/* CTA */}
                <div>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-sm text-sm font-medium hover:bg-orange-600 uppercase">
                        Contact Us
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
