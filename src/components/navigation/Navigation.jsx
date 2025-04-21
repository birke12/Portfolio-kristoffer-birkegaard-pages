import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { Link } from "react-scroll"; // <-- this one!
import logo from "./Logo-kb2.png";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleScroll = () => {
    setScrolled(window.scrollY > 650);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
   <a href="./">
  <div className="logo-container">
    <img
      src={logo}
      alt="Kristoffer Birkegaard Logo"
      className="logo-image"
    />
  </div>
</a>


      <div className="burger-menu" onClick={toggleMenu}>
        <BurgerMenu />
      </div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
  <li>
    <Link
      to="home"
      smooth={true}
      duration={500}
      offset={-80}
      onClick={() => setIsOpen(false)}
    >
      Hjem
    </Link>
  </li>
  <li>
    <Link to="about" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)}>
      Om Mig
    </Link>
  </li>
  <li>
    <Link to="skills" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)}>
      Færdigheder
    </Link>
  </li>
  <li>
    <Link to="projects" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)}>
      Projekter
    </Link>
  </li>
  <li>
    <Link to="gallery" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)}>
      Galleri
    </Link>
  </li>
 {/*  <li>
  <NavLink to="/cvresume" onClick={() => setIsOpen(false)}>
    Cv/Ansøgning
  </NavLink>
</li> */}

  <li>
    <Link to="kontakt" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)}>
      Kontakt
    </Link>
  </li>
</ul>

    </nav>
  );
};

export default Navigation;
