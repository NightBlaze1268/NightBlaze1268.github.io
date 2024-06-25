import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        <Link to="/career" className="text-white hover:text-gray-300">Careers</Link>
      </div>
    </nav>
  );
};

export default Navbar;
