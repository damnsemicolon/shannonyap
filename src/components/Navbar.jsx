import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    const navbar = document.querySelector('.navbar');

    if (position > 0) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="bg-primary fixed top-0 py-2 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="h-9 object-contain" />
            <p className="font-megrim text-white text-2xl hidden lg:block">
              | Front-end Developer
            </p>
          </Link>
          <button
            type="button"
            className="sm:hidden block text-white"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <img src={close} alt="close" className="w-6 h-6" />
            ) : (
              <img src={menu} alt="menu" className="w-6 h-6" />
            )}
          </button>
          <ul className="hidden sm:flex sm:gap-10 items-center">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? 'text-white'
                    : 'text-secondary'
                } font-medium hover:text-white text-base cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul
        className={`${
          toggle ? 'block' : 'hidden'
        } sm:hidden pb-6 pt-2 text-center`}
      >
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${
              active === link.title ? 'text-white' : 'text-secondary'
            } font-medium hover:text-white text-2xl cursor-pointer`}
            onClick={() => {
              setToggle(!toggle);
              setActive(link.title);
            }}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
