import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const NavBar = () => {
  return (
    <nav className="flex justify-center items-center py-8 p-4 w-screen">
        <div className="flex flex-row justify-between items-center w-full max-w-2xl">
        <div>
        <Link to="/archive" className="text-grey text-3xl text-bold custom-font-text blur-text">
          PHOTOS
        </Link>
      </div>
      <div >
        <Link to="/projects" className="text-grey custom-font-text text-bold text-3xl blur-text">
          MEDIA
        </Link>
      </div>
      <div >
        <Link to="/about" className="text-grey custom-font-text text-3xl blur-text">
          CONTACT
        </Link>

      </div>

        </div>
      
    </nav>
  );
};

export default NavBar;