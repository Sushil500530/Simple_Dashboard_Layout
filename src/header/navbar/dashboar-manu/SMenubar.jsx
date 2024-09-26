import React, { useState } from 'react';
import { MdDashboard, MdSettings } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SMenubar = () => {
  const [activeMenu, setActiveMenu] = useState(null); // Manage active menu

  const linkMenus = [
    {
      title: 'Home',
      path: '/',
      icon: <MdDashboard />,
      subTitle: [
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
        { title: 'Blog', path: '/blog' },
        { title: 'Service', path: '/service' },
        { title: 'More', path: '/more' },
      ],
    },
    {
      title: 'Settings',
      path: '/settings',
      icon: <MdSettings />,
      subTitle: [
        { title: 'Profile', path: '/profile' },
        { title: 'Account', path: '/account' },
        { title: 'Privacy', path: '/privacy' },
      ],
    },
  ];

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index); // Toggle active menu
  };

  return (
    <div className="bg-transparent text-black hidden lg:block z-50 hover:w-auto">
      <div className="flex flex-col items-start justify-center">
        {linkMenus.map((menu, index) => (
          <div key={index} className="z-10 bg-base-200 relative">
            <div
              role="button"
              className="btn flex items-center justify-start"
              onClick={() => toggleMenu(index)} // Toggle sub-menu on click
            >
              {menu.icon}
            </div>
            {activeMenu === index && (
              <ul className="py-2 px-5 shadow bg-gray-300 text-black w-52 fixed left-20 z-50 ">
                {menu.subTitle.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <Link to={sub.path}>{sub.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SMenubar;
