import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup effect
    };
  }, [isOpen]);

  return (
    <nav className="bg-gray-900 text-white py-4 fixed w-full z-50 shadow-md">
      <div className="w-screen mx-auto flex justify-between items-center px-6 md:px-12">
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer">Homewise</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-white cursor-pointer">
          <li className="hover:text-orange-400">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-orange-400">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-orange-400">
            <a href="#about">About us</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
          <MenuIcon fontSize="large" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 w-screen h-screen bg-gray-900  backdrop-blur-md transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out flex flex-col items-center justify-center z-50`}
      >
        {/* Close Button */}
        <button className="absolute top-6 right-6 text-white" onClick={() => setIsOpen(false)}>
          <CloseIcon fontSize="large" />
        </button>

        {/* Mobile Menu Links */}
        <ul className="text-white text-2xl space-y-6 text-center">
          <li className="hover:text-orange-400 transition duration-300">
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li className="hover:text-orange-400 transition duration-300">
            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>
          </li>
          <li className="hover:text-orange-400 transition duration-300">
            <a href="#about" onClick={() => setIsOpen(false)}>
              About us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
