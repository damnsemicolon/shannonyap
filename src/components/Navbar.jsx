import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="fixed bg-primary py-2 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 z-50">
        <div className="flex justify-between z-50">
          <Link
            to="/"
            className="flex items-center gap-2 z-50"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="h-9 object-contain z-50" />
            <p className="font-megrim text-white text-2xl z-50 hidden lg:block">
              | Front-end Developer
            </p>
          </Link>
          <button
            type="button"
            className="sm:hidden block text-white z-50"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <img src={close} alt="close" className="w-6 h-6 z-50" />
            ) : (
              <img src={menu} alt="menu" className="w-6 h-6 z-50" />
            )}
          </button>
          <ul className="hidden z-50 sm:flex sm:gap-10 items-center">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? 'text-white z-50'
                    : 'text-secondary z-50'
                } font-medium hover:text-white text-base cursor-pointer z-50`}
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
          toggle ? 'block z-50' : 'hidden'
        } sm:hidden pb-6 pt-2 text-center z-50`}
      >
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${
              active === link.title ? 'text-white z-50' : 'text-secondary z-50'
            } font-medium hover:text-white text-2xl cursor-pointer z-50`}
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
