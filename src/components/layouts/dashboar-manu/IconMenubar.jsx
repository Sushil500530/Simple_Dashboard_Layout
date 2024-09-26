import { Link } from 'react-router-dom';
import { dashboardData } from '../../../data/menu-items';
import { useState } from 'react';

export function IconMenubar() {
  const [activeMenuIndex, setActiveMenuIndex] = useState(null); 
  const toggleSubMenu = (index) => {
    // Toggle submenu visibility
    setActiveMenuIndex(activeMenuIndex === index ? null : index);
  };

  return (
    <div className="bg-transparent text-black hidden lg:block">
      <div className="flex flex-col items-start justify-center gap-1">
        {dashboardData?.length > 0 && dashboardData?.map((menu, index) => (
          <div key={index} className="relative w-full">

            <div
              role="button"
              className="flex items-center justify-center w-full"
              onClick={() => toggleSubMenu(index)}
            >
              {
                menu?.subMenu?.length > 0 ?
                   <span className='btn w-full h-full'><menu.icon /> </span> :
                  <Link to={menu.href} className={`${menu?.subMenu?.length > 0 ? "hidden" : " btn w-full text-center flex items-center justify-center"}`}>
                    <menu.icon />
                  </Link>
              }
            </div>
            {activeMenuIndex === index && (
              <div className={`${menu?.subMenu?.length > 0 && "absolute left-16 top-0 w-48 bg-white shadow-lg rounded z-50 p-3"}`}>
                <ul className="space-y-2">
                  {menu?.subMenu?.length > 0 && menu?.subMenu?.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subItem.href} className="text-blue-500 hover:underline">
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

