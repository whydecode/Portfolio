import "./Navbar.css";
import { useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const navLinks = open ? "nav-links open" : "nav-links";
  const link = open ? "fade" : "";
  const hamburger = open ? "hamburger toggle" : "hamburger";
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 200) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <nav className={colorChange ? "navbar colorChange" : "navbar"}>
      <div className={hamburger} onClick={handleClick}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      <a href="/" id="name" >
        Rahul Agarwal
      </a>

      <ul className={navLinks}>
        <li className={link} onClick={handleClick}>
          <a href="#">Home</a>
        </li>
        <li className={link} onClick={handleClick}>
          <a href="#about">About</a>
        </li>
        <li className={link} onClick={handleClick}>
          <a href="#projects">Projects</a>
        </li>
        <li className={link} onClick={handleClick}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
