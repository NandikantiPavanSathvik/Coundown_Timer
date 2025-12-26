

import { Link } from 'react-router-dom';
import { Home, PlusCircle } from 'lucide-react';

const Navbar = () => (
  <nav className="p-4 border-b border-slate-100 flex justify-center gap-6 bg-white sticky top-0 z-50">
    <Link to="/" className="flex items-center gap-2 font-bold text-slate-600 hover:text-blue-600 transition-colors">
      <Home size={20} /> Home
    </Link>
    <Link to="/timer" className="flex items-center gap-2 font-bold text-slate-600 hover:text-blue-600 transition-colors">
      <PlusCircle size={20} /> Add Timer
    </Link>
  </nav>
);

export default Navbar;