import React, { useState } from 'react';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certificates">Certifications</a></li>
          
          {/* Blog */}
          <li
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#blog">Blog</a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="https://medium.com/@nityanandmadpathi">Medium</a></li>
                <li><a href="https://nityanandmadpathi.hashnode.dev/">hashnode</a></li>
                <li><a href="https://nityanandmadpathi.wordpress.com/2023/12/02/75medium/">Personal</a></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;