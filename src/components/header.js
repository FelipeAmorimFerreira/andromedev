import { Link } from "gatsby";
import React from "react";

const Header = () => (
  <header className="w-full bg-dark-gray pt-4 sticky top-0 z-30 mb-8 text-white">
    <nav className="flex justify-center space-x-16 uppercase">
      <Link to="/" className="hover:text-orange">
        INÍCIO
      </Link>
      <Link to="/sobre" className="hover:text-orange">
        SOBRE
      </Link>
      <Link to="/guia" className="hover:text-orange">
        GUIA DE BORDO
      </Link>
    </nav>
  </header>
);

export default Header;
